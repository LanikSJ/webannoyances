const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { createRequire } = require('node:module');
const path = require('node:path');
const { test } = require('node:test');

// Uses Node's built-in runner: node --test test/zod-override.test.cjs
const repoRoot = path.resolve(__dirname, '..');
const packageJson = JSON.parse(readFileSync(path.join(repoRoot, 'package.json'), 'utf8'));
const lockfile = JSON.parse(readFileSync(path.join(repoRoot, 'package-lock.json'), 'utf8'));
const zodEntries = Object.entries(lockfile.packages).filter(
  ([location]) => location.endsWith('/node_modules/zod') || location === 'node_modules/zod',
);

// Find glob entries in the lockfile
const globEntries = Object.entries(lockfile.packages).filter(
  ([location]) => location.endsWith('/node_modules/glob') || location === 'node_modules/glob',
);

/**
 * Find js-yaml entries in the lockfile
 */
const jsYamlEntries = Object.entries(lockfile.packages).filter(
  ([location]) => location.endsWith('/node_modules/js-yaml') || location === 'node_modules/js-yaml',
);

// Find minimatch entries in the lockfile
const minimatchEntries = Object.entries(lockfile.packages).filter(
  ([location]) => location.endsWith('/node_modules/minimatch') || location === 'node_modules/minimatch',
);

/**
 * Follow the installed dependency chain to the AGTree version that uses Zod.
 * Resolving from each parent works with both hoisted and nested npm packages.
 *
 * @returns {{ filename: string, consumerRequire: NodeRequire }} The consumer's
 * entry point and a require function scoped to its installed dependencies.
 */
function resolveZodConsumer() {
  const scriptletsRequire = createRequire(require.resolve('@adguard/scriptlets/package.json'));
  const filename = scriptletsRequire.resolve('@adguard/agtree');
  return { filename, consumerRequire: createRequire(filename) };
}

/**
 * Resolve the AGTree consumer for override checks.
 */
function resolveOverrideConsumer() {
  const scriptletsRequire = createRequire(require.resolve('@adguard/scriptlets/package.json'));
  const filename = scriptletsRequire.resolve('@adguard/agtree');
  return { filename, consumerRequire: createRequire(filename) };
}

/**
 * Load the AGTree consumer after checking that it resolves the PR's Zod version.
 *
 * @returns {typeof import('@adguard/agtree')} The consumer's exported API.
 * @throws {assert.AssertionError} If the installed Zod version differs from the override.
 */
function loadZodConsumer() {
  const { filename, consumerRequire } = resolveZodConsumer();
  // Do not accidentally validate the upgrade against a stale Zod 3 install.
  assert.equal(
    consumerRequire('zod/package.json').version,
    packageJson.overrides.zod,
    'Run npm ci to install the PR dependencies',
  );
  return consumerRequire(filename);
}

// ========== ZOD OVERRIDE TESTS (4.6.6) ==========

test('Zod is pinned to the PR version instead of a range or the previous major', () => {
  assert.equal(packageJson.overrides.zod, '4.6.6');
});

test('the root lockfile entry matches the Zod override and tarball version', () => {
  const lockedZod = lockfile.packages['node_modules/zod'];
  assert.ok(lockedZod, 'The lockfile must include Zod');
  assert.equal(lockedZod.version, packageJson.overrides.zod);
  assert.equal(lockedZod.resolved, `https://registry.npmjs.org/zod/-/zod-${packageJson.overrides.zod}.tgz`);
});

test('no nested Zod lockfile entry retains an older version or tarball', () => {
  assert.ok(zodEntries.length > 0, 'At least one Zod package must be locked');
  for (const [location, entry] of zodEntries) {
    assert.equal(entry.version, packageJson.overrides.zod, `${location} must honor the override`);
    assert.equal(
      entry.resolved,
      `https://registry.npmjs.org/zod/-/zod-${entry.version}.tgz`,
      `${location} must resolve the overridden tarball`,
    );
  }
});

test('the actual AGTree consumer resolves the overridden Zod installation', () => {
  const { consumerRequire } = resolveZodConsumer();
  assert.equal(consumerRequire('zod/package.json').version, packageJson.overrides.zod);
});

test('AGTree initializes its Zod schemas with the upgraded dependency', () => {
  const { RuleParser } = loadZodConsumer();
  assert.equal(typeof RuleParser.parse, 'function');
  assert.equal(typeof RuleParser.generate, 'function');
});

// These exercise the affected consumer through its public API. Round trips
// protect filter contents when dependency initialization or parsing changes.
for (const [name, rule, category] of [
  ['network rule with a negated domain', '||example.com^$domain=example.org|~sub.example.org', 'Network'],
  ['network exception', '@@||example.com^$script', 'Network'],
  ['cosmetic rule with multiple domains', 'example.com,~example.org##.newsletter', 'Cosmetic'],
  ['cosmetic exception', 'example.com#@#.newsletter', 'Cosmetic'],
  ['uBlock scriptlet', 'example.com##+js(aopr, googletag)', 'Cosmetic'],
]) {
  test(`the Zod consumer preserves a ${name}`, () => {
    const { RuleParser } = loadZodConsumer();
    const parsed = RuleParser.parse(rule);
    assert.equal(parsed.category, category);
    assert.equal(RuleParser.generate(parsed), rule);
  });
}

test('the Zod consumer still rejects an unterminated scriptlet in strict mode', () => {
  const { RuleParser, AdblockSyntaxError } = loadZodConsumer();
  assert.throws(() => RuleParser.parse('example.com##+js(aopr, googletag', { tolerant: false }), AdblockSyntaxError);
});

test('tolerant parsing preserves an invalid scriptlet and reports its error', () => {
  const { RuleParser } = loadZodConsumer();
  const rule = 'example.com##+js(aopr, googletag';
  const parsed = RuleParser.parse(rule, { tolerant: true });
  assert.equal(parsed.category, 'Invalid');
  assert.equal(parsed.error.name, 'AdblockSyntaxError');
  assert.ok(parsed.error.message.length > 0);
  assert.equal(RuleParser.generate(parsed), rule);
});

// ========== GLOB AND JS-YAML OVERRIDE TESTS ==========

test('glob is pinned to the override version', () => {
  assert.equal(packageJson.overrides.glob, '14.0.2');
});

test('the root lockfile entry matches the glob override and tarball version', () => {
  const lockedGlob = lockfile.packages['node_modules/glob'];
  assert.ok(lockedGlob, 'The lockfile must include glob');
  assert.equal(lockedGlob.version, packageJson.overrides.glob);
  assert.equal(
    lockedGlob.resolved,
    `https://registry.npmjs.org/glob/-/glob-${packageJson.overrides.glob}.tgz`,
  );
});

test('no nested glob lockfile entry retains an older version or tarball', () => {
  assert.ok(globEntries.length > 0, 'At least one glob package must be locked');
  for (const [location, entry] of globEntries) {
    assert.equal(entry.version, packageJson.overrides.glob, `${location} must honor the override`);
    assert.equal(
      entry.resolved,
      `https://registry.npmjs.org/glob/-/glob-${entry.version}.tgz`,
      `${location} must resolve the overridden tarball`,
    );
  }
});

test('the actual AGTree consumer resolves the overridden glob installation', () => {
  const { consumerRequire } = resolveOverrideConsumer();
  assert.equal(consumerRequire('glob/package.json').version, packageJson.overrides.glob);
});

test('js-yaml is pinned to the override version', () => {
  assert.equal(packageJson.overrides['js-yaml'], '4.3.2');
});

test('the root lockfile entry matches the js-yaml override and tarball version', () => {
  const lockedJsYaml = lockfile.packages['node_modules/js-yaml'];
  assert.ok(lockedJsYaml, 'The lockfile must include js-yaml');
  assert.equal(lockedJsYaml.version, packageJson.overrides['js-yaml']);
  assert.equal(
    lockedJsYaml.resolved,
    `https://registry.npmjs.org/js-yaml/-/js-yaml-${packageJson.overrides['js-yaml']}.tgz`,
  );
});

test('no nested js-yaml lockfile entry retains an older version or tarball', () => {
  assert.ok(jsYamlEntries.length > 0, 'At least one js-yaml package must be locked');
  for (const [location, entry] of jsYamlEntries) {
    assert.equal(entry.version, packageJson.overrides['js-yaml'], `${location} must honor the override`);
    assert.equal(
      entry.resolved,
      `https://registry.npmjs.org/js-yaml/-/js-yaml-${entry.version}.tgz`,
      `${location} must resolve the overridden tarball`,
    );
  }
});

test('the actual AGTree consumer resolves the overridden js-yaml installation', () => {
  const { consumerRequire } = resolveOverrideConsumer();
  assert.equal(consumerRequire('js-yaml/package.json').version, packageJson.overrides['js-yaml']);
});

// ========== MINIMATCH OVERRIDE TESTS ==========

test('minimatch is pinned to the override version', () => {
  assert.equal(packageJson.overrides['minimatch'], '11.0.1');
});

test('the root lockfile entry matches the minimatch override and tarball version', () => {
  const lockedMinimatch = lockfile.packages['node_modules/minimatch'];
  assert.ok(lockedMinimatch, 'The lockfile must include minimatch');
  assert.equal(lockedMinimatch.version, packageJson.overrides['minimatch']);
  assert.equal(
    lockedMinimatch.resolved,
    `https://registry.npmjs.org/minimatch/-/minimatch-${packageJson.overrides['minimatch']}.tgz`,
  );
});

test('no nested minimatch lockfile entry retains an older version or tarball', () => {
  assert.ok(minimatchEntries.length > 0, 'At least one minimatch package must be locked');
  for (const [location, entry] of minimatchEntries) {
    assert.equal(entry.version, packageJson.overrides['minimatch'], `${location} must honor the override`);
    assert.equal(
      entry.resolved,
      `https://registry.npmjs.org/minimatch/-/minimatch-${entry.version}.tgz`,
      `${location} must resolve the overridden tarball`,
    );
  }
});

test('the actual AGTree consumer resolves the overridden minimatch installation', () => {
  const { consumerRequire } = resolveOverrideConsumer();
  assert.equal(consumerRequire('minimatch/package.json').version, packageJson.overrides['minimatch']);
});
