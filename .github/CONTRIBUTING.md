# Contributing to WebAnnoyances

Thank you for your interest in contributing to WebAnnoyances! This project relies on
community contributions to maintain effective ad blocking and annoyance filters. All
contributions are welcome, from reporting issues to submitting filter improvements.

## Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork locally: `git clone https://github.com/YOUR_USERNAME/webannoyances.git`
3. **Create** a new branch for your changes: `git checkout -b feature/your-feature-name`

## How to Contribute

### Reporting Issues

- Check existing [issues](https://github.com/LanikSJ/webannoyances/issues) to avoid duplicates
- Use the issue template and provide detailed information about:
  - The website/domain causing the issue
  - Type of content to block (ads, trackers, annoyances)
  - Screenshots or examples if applicable
  - Your browser and ad blocker extension versions

### Contributing Filters

- Familiarize yourself with [EasyList syntax](https://help.eyeo.com/en/adblockplus/how-to-write-filters)
- Test your filters thoroughly before submitting
- Follow the existing patterns in the filter files
- Use descriptive commit messages explaining what filters were added/removed and why

### Pull Request Process

1. **Update** the appropriate filter files with your changes
2. **Test** your changes locally:
   - Use [Adblock Plus Filter Validator](https://abpvn.com/rules-syntax-checker/)
   - Test in multiple browsers with Adblock Plus/uBlock Origin
3. **Commit** your changes with clear, descriptive messages
4. **Push** to your fork and create a Pull Request
5. **Sign-off** on your commits if required by the repository

**Note:** For large contributions or complex changes, please open an issue first to discuss your approach.

## Testing Your Changes

- Test filters in multiple browsers (Chrome, Firefox, Safari, Edge)
- Verify filters work with major ad blockers (Adblock Plus, uBlock Origin, AdGuard)
- Consider performance impact - complex filters may slow down page loading
- Check for false positives - ensure legitimate content isn't blocked

## Commit Guidelines

- Use clear, descriptive commit messages
- Start with a verb (Add, Remove, Fix, Update, etc.)
- Reference issue numbers when applicable: `Fix #123: Remove annoying popup from example.com`
- Keep commits focused on single changes when possible
- Test commits before pushing to ensure they work correctly

## Questions?

If you have questions about contributing or need help getting started, feel free to:

- Open a [GitHub Discussion](https://github.com/LanikSJ/webannoyances/discussions)
- Check the [Documentation](https://github.com/LanikSJ/webannoyances/wiki)
- Join the conversation on [forums.lanik.us](https://forums.lanik.us)

## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project
and our community a harassment-free experience for everyone, regardless of
age, body size, disability, ethnicity, gender identity and expression,
level of experience, nationality, personal appearance, race, religion, or
sexual identity and orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment
include:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

- The use of sexualized language or imagery and unwelcome sexual attention
  or advances
- Trolling, insulting/derogatory comments, and personal or political
  attacks
- Public or private harassment
- Publishing others' private information, such as a physical or electronic
  address, without explicit permission
- Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of
acceptable behavior and are expected to take appropriate and fair
corrective action in response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other
contributions that are not aligned to this Code of Conduct, or to ban
temporarily or permanently any contributor for other behaviors that they
deem inappropriate, threatening, offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public
spaces when an individual is representing the project or its community.
Examples of representing a project or community include using an official
project e-mail address, posting via an official social media account, or
acting as an appointed representative at an online or offline event.
Representation of a project may be further defined and clarified by
project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team at [forums.lanik.us](https://forums.lanik.us).
All complaints will be reviewed and investigated and will result in a
response that is deemed necessary and appropriate to the circumstances. The
project team is obligated to maintain confidentiality with regard to the
reporter of an incident. Further details of specific enforcement policies
may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in
good faith may face temporary or permanent repercussions as determined by
other members of the project's leadership.

### Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage],
version 1.4, available at [version]

[homepage]: https://www.contributor-covenant.org
[version]: https://www.contributor-covenant.org/version/1/4/
