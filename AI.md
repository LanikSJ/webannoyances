# AI Rules & Project Standards for webannoyances

## Repository Overview

webannoyances contains filter lists for blocking annoying website elements beyond traditional ads.

## Code Standards and Practices

### Filter Standards

- Follow AdBlock filter syntax for cosmetic and network rules
- Focus on non-ad blocking rules (anti-annoyance filters)
- Use clear, descriptive rules with proper exceptions
- Document filter purposes and impact assessments

### Documentation Standards

- Include clear installation instructions for various ad blockers
- Document filter categories and their specific purposes
- Provide maintenance guidelines and contribution procedures
- Use markdown formatting consistently

### Markdown Compliance Requirements (MANDATORY)

- **ALL markdown files (.md) MUST pass markdownlint validation with zero errors or warnings**
- Run `markdownlint <filename>` on every markdown file before considering it complete
- Follow the project's `.markdownlint.json` configuration strictly
- Address ALL markdownlint issues immediately - no exceptions or workarounds
- Common requirements include:
  - Maximum line length of 80 characters (MD013)
  - Consistent heading styles and hierarchy
  - Proper list formatting and indentation
  - Blank lines around headings and code blocks
  - Consistent link and reference formatting
  - No trailing whitespace
  - Files must end with newlines
  - Proper table formatting when applicable
- Use `markdownlint --fix <filename>` for auto-fixable issues when available
- Validate markdown files in CI/CD pipelines where applicable

## Development Guidelines

### When Making Changes

- Preserve existing functionality unless explicitly asked to change it
- Update documentation when adding new annoyance categories or modifying rules
- Test filters across supported ad blockers and browsers
- **Always run markdownlint and fix all issues in markdown files before considering changes complete**

### Annoyance Filter Standards

- Focus on non-ad elements that degrade user experience
- Implement proper exceptions to avoid breaking site functionality
- Use AGLint and similar tools for validation
- Test filters against real websites for effectiveness and false positives

## GitHub & Automation Standards

These rules apply specifically to files in `.github/*` (workflows, templates, and documentation).

### Quality Gates (MANDATORY)

Before completing any change in `.github/`:

1. ✅ Run `markdownlint` validation (if .md file).
2. ✅ Ensure project standards are followed.
3. ✅ Verify contribution guidelines are up-to-date.
4. ✅ Check that automation maintains project standards.

### Templates and Workflows

- Ensure issue and pull request templates provide clear, actionable guidelines.
- Include project-specific troubleshooting sections in templates.
- Reference existing project documentation and standards.

### Documentation standards in .github/

- `.github/CONTRIBUTING.md` must include:
  - Development environment setup instructions.
  - Testing requirements and procedures.
  - Documentation standards for new features.
  - Project-specific contribution guidelines.

### Automation and CI/CD

- Project workflows must include automated testing stages.
- Code quality checks must be integrated into CI/CD.
- Release automation must be properly configured.

### Error Prevention

- NEVER generate markdown that violates line length or formatting rules.
- ALWAYS cross-reference with existing project practices before making changes.
- ENSURE all links and references are valid and current.
- VALIDATE that new requirements don't conflict with established workflows.
