# 🛡️ Web Annoyances Ultralist - _unsuck the web!_

## 📑 Table of Contents

- [📖 Intro](#-intro)
- [🎬 Demonstration](#-demonstration)
  - [🟥 Before](#-before)
  - [🟩 After](#-after)
- [🔧 Requirements](#-requirements)
  - [💻 Desktop](#-desktop)
  - [📱 Mobile](#-mobile)
- [⚡ One Click Installation](#-one-click-installation)
  - [📝 Installation Notes](#-installation-notes)
- [🔧 Usage Instructions](#-usage-instructions)
  - [📝 Filter Processing Scripts](#-filter-processing-scripts)
  - [🛠️ Other Utility Scripts](#️-other-utility-scripts)
  - [📋 Configuration](#-configuration)
  - [🔄 Workflow Examples](#-workflow-examples)
- [💬 EasyList Forum](#-easylist-forum)
- [🌐 Mirror Hosts of Web Annoyances Ultralist](#-mirror-hosts-of-web-annoyances-ultralist)
- [📄 License](#-license)

## 📖 Intro

Are you tired of not being able to use all of your screen real estate for the text that matters on a website
because floating headers and other distracting elements are blocking your view?
Reclaim your screen real estate with Web Annoyances Ultralist!

Block annoying web elements such as [sticky headers](https://alisdair.mcdiarmid.org/kill-sticky-headers/), [dickbars](https://daringfireball.net/2017/06/medium_dickbars), [floating headers](https://user-images.githubusercontent.com/22258847/51347203-7482d700-1a6d-11e9-96f8-0548173c7b79.png), [scrolling headers](https://user-images.githubusercontent.com/22258847/51347203-7482d700-1a6d-11e9-96f8-0548173c7b79.png), [fixed headers](https://zichy.de/public/siufh.html), [scrolling videos](https://user-images.githubusercontent.com/22258847/51348044-aac15600-1a6f-11e9-9507-a9341165d7d6.png), [stickynavs](https://user-images.githubusercontent.com/22258847/51347203-7482d700-1a6d-11e9-96f8-0548173c7b79.png), [social icons](https://user-images.githubusercontent.com/22258847/51347990-89606a00-1a6f-11e9-91f9-12cf11de1feb.png), [social share bars](https://duckduckgo.com/?q=social+share+bars&iax=images&ia=images), [smartphone app banners](https://www.hanselman.com/blog/IdLikeToUseTheWebMyWayThankYouVeryMuchQuora.aspx), [app download prompts](https://thenextweb.com/basics/2018/11/21/how-to-stop-reddits-annoying-app-download-prompt/), [cookie notices](https://user-images.githubusercontent.com/22258847/51349381-338dc100-1a73-11e9-9f76-1fbd4ee74561.png), [GDPR warnings](https://www.theguardian.com/technology/askjack/2018/jul/05/what-should-i-do-about-all-the-gdpr-pop-ups-on-websites), [scroll to top buttons](https://duckduckgo.com/?q=scroll+to+top+button&iax=images&ia=images), [modal overlays](https://user-images.githubusercontent.com/22258847/51345822-fc66e200-1a69-11e9-9ee0-248696b8f07f.png), [interstitial site overlays](https://moz.com/blog/popups-seo-whiteboard-friday), [removed or hidden overflow scroll bars](https://user-images.githubusercontent.com/22258847/51346400-8fece280-1a6b-11e9-8d5b-9cc0c2713dea.png), [subscription nags](https://user-images.githubusercontent.com/22258847/51347205-76e53100-1a6d-11e9-93a3-b6e5afbe3540.png), and generally distracting elements that have increasingly been turning the web into a [user-hostile](https://www.urbandictionary.com/define.php?term=user-hostile) environment.

When possible, sticky headers, stickynavs, floating elements, scrolling videos and more will be pinned in place to prevent site breakage.

## 🎬 Demonstration

### 🟥 Before

Typical Website in 2020 _Before_ Installing Web Annoyances Ultralist

![scrolling_video_newsletter_header_share_icons highlighted](https://user-images.githubusercontent.com/22258847/51348578-16f08980-1a71-11e9-80b8-0f2ad5379bcd.png)

Above screenshot taken using uBlock Origin Default Filter Lists

### 🟩 After

Typical Website in 2020 _After_ Installing Web Annoyances Ultralist

![afterinstall](https://user-images.githubusercontent.com/22258847/51348138-e8be7a00-1a6f-11e9-9b0c-5fac61a83f8f.png)

Above screenshot taken using uBlock Origin Default Filter Lists + Web Annoyances Ultralist

Head over to the [demonstration page](https://github.com/LanikSJ/webannoyances/wiki/Demonstration-of-Web-Annoyances-Ultralist) for additional visual examples of Web Annoyances Ultralist in action.

## 🔧 Requirements

This filter list aims to remove annoying web elements that block your view of the screen and is created and optimized using the [uBlock Origin Extended Syntax](https://github.com/gorhill/uBlock/wiki/Static-filter-syntax).

For the best user experience, please use this filter list with [![uBO_icon_16](https://user-images.githubusercontent.com/22258847/58104215-675c2d00-7bb2-11e9-9ef7-53bd5d32139c.png) uBlock Origin](https://github.com/gorhill/uBlock),
[![adguard_icon_16](https://user-images.githubusercontent.com/22258847/58104254-7d69ed80-7bb2-11e9-989b-a0a73db4d808.png) AdGuard for ![64px-Windows_darkblue_2012_svg svg](https://user-images.githubusercontent.com/22258847/58109066-ea818100-7bba-11e9-9808-fde2015ebe10.png)](https://adguard.com/en/adguard-windows/overview.html), or [![adguard_icon_16](https://user-images.githubusercontent.com/22258847/58104254-7d69ed80-7bb2-11e9-989b-a0a73db4d808.png) AdGuard for ![64px-MacOS_wordmark_(2017) svg](https://user-images.githubusercontent.com/22258847/58109057-e6edfa00-7bba-11e9-886b-f162bcffc7df.png)](https://adguard.com/en/adguard-mac/overview.html).

Browser specific download locations are located below:

### 💻 Desktop

- ![uBO_icon_16](https://user-images.githubusercontent.com/22258847/58104215-675c2d00-7bb2-11e9-9ef7-53bd5d32139c.png) [uBlock Origin for ![google-social-logo-chrome-16](https://user-images.githubusercontent.com/22258847/58106483-354cca00-7bb6-11e9-9e23-d0e727180c2a.png) Google Chrome](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)
- ![uBO_icon_16](https://user-images.githubusercontent.com/22258847/58104215-675c2d00-7bb2-11e9-9ef7-53bd5d32139c.png) [uBlock Origin for ![Firefox_Logo_2017_16](https://user-images.githubusercontent.com/22258847/58106480-34b43380-7bb6-11e9-8156-d103da14289b.png) Mozilla FireFox](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
- ![uBO_icon_16](https://user-images.githubusercontent.com/22258847/58104215-675c2d00-7bb2-11e9-9ef7-53bd5d32139c.png) [uBlock Origin for
  ![Safari_browser_logo_16](https://user-images.githubusercontent.com/22258847/58106493-35e56080-7bb6-11e9-8d9d-4feebb27a241.png) Apple Safari](https://github.com/el1t/uBlock-Safari#installation)
- ![uBO_icon_16](https://user-images.githubusercontent.com/22258847/58104215-675c2d00-7bb2-11e9-9ef7-53bd5d32139c.png) [uBlock Origin for ![Opera_2015_icon_16](https://user-images.githubusercontent.com/22258847/58106490-354cca00-7bb6-11e9-9826-e339bbd708b3.png) Opera](https://addons.opera.com/extensions/details/ublock/)
- ![adguard_icon_16](https://user-images.githubusercontent.com/22258847/58104254-7d69ed80-7bb2-11e9-989b-a0a73db4d808.png) [AdGuard for ![64px-Windows_darkblue_2012_svg svg](https://user-images.githubusercontent.com/22258847/58109066-ea818100-7bba-11e9-9808-fde2015ebe10.png)](https://adguard.com/en/adguard-windows/overview.html)
- ![adguard_icon_16](https://user-images.githubusercontent.com/22258847/58104254-7d69ed80-7bb2-11e9-989b-a0a73db4d808.png) [AdGuard for ![64px-MacOS_wordmark_(2017) svg](https://user-images.githubusercontent.com/22258847/58109057-e6edfa00-7bba-11e9-886b-f162bcffc7df.png)](https://adguard.com/en/adguard-mac/overview.html)

### 📱 Mobile

- ![uBO_icon_16](https://user-images.githubusercontent.com/22258847/58104215-675c2d00-7bb2-11e9-9ef7-53bd5d32139c.png) [uBlock Origin for ![Firefox_Logo_2017_16](https://user-images.githubusercontent.com/22258847/58106480-34b43380-7bb6-11e9-8156-d103da14289b.png) Mozilla FireFox for
  ![16px-Android_robot svg](https://user-images.githubusercontent.com/22258847/58109333-74314e80-7bbb-11e9-98ea-b25525b42e9d.png) Android](https://addons.mozilla.org/EN-US/android/addon/ublock-origin/)
- ![uBO_icon_16](https://user-images.githubusercontent.com/22258847/58104215-675c2d00-7bb2-11e9-9ef7-53bd5d32139c.png) [uBlock Origin for ![Kiwi Browser](https://user-images.githubusercontent.com/5884000/63644438-59560500-c6e9-11e9-8089-695a781bc095.png) Kiwi Browser for
  ![16px-Android_robot svg](https://user-images.githubusercontent.com/22258847/58109333-74314e80-7bbb-11e9-98ea-b25525b42e9d.png) Android](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)

## ⚡ One Click Installation

Click the following: [Add Web Annoyances Ultralist to Custom uBlock Origin Filters](https://subscribe.adblockplus.org/?location=https://raw.githubusercontent.com/LanikSJ/webannoyances/master/ultralist.txt&title=Web%20Annoyances%20Ultralist).

### 📝 Installation Notes

After clicking the Link above, a warning box will appear asking you to confirm the installation - Click 'OK' to add the list to your Custom Filter Lists.

The warning box will look like the following:

![installpopup](https://user-images.githubusercontent.com/22258847/40389620-73bc68ae-5e02-11e8-94ac-30bf769bdf70.PNG)

After clicking 'OK' the filter list should be installed.

You can validate the list installed properly by navigating to your uBlock Origin Dashboard and clicking on the [Filter lists](https://user-images.githubusercontent.com/22258847/39937403-1da7b8b8-553f-11e8-865a-73a3f2fa4bb8.PNG) tab. Scroll to the bottom of the screen and verify Web Annoyances Ultralist is showing up in your custom section.

![installed](https://user-images.githubusercontent.com/22258847/40389548-42ecaf5e-5e02-11e8-8d16-1d7e08c805b6.PNG)

[Step-by-Step install instructions](https://github.com/LanikSJ/webannoyances/wiki/Installation-Instructions#install-method-2---step-by-step-installation) are available in the [wiki](https://github.com/LanikSJ/webannoyances/wiki).

## 🔧 Usage Instructions

This repository includes several scripts for managing and processing filter lists. Below are the usage instructions for the main tools.

### 📝 Filter Processing Scripts

#### checksum-sort.sh - Enhanced Backup & Sorting Tool

The `checksum-sort.sh` script provides comprehensive filter list processing with advanced backup functionality.

**Basic Usage:**

```bash
./scripts/checksum-sort.sh filters/ultralist.txt
```

**Features:**

- **Organized Backup Storage**: Centralized backup directory (`backup/`) for better organization
- **Backup Integrity Verification**: Automatic checksum verification using SHA256, MD5, or size comparison
- **Automatic Backup Rotation**: Configurable maximum backup retention (default: 10 backups)
- **Enhanced Error Handling**: Robust rollback mechanism with verification
- **Cross-Platform Compatibility**: Works on both Linux and macOS

**Advanced Usage:**

```bash
# List available backups for a filter file
./scripts/checksum-sort.sh --list-backups filters/ultralist.txt

# View backup history
ls -la backup/
```

**Sample Output:**

```bash
[INFO] 2024-01-15 10:30:15 Available backups for 'ultralist.txt':
-rw-r--r-- 1 user staff 1.2M Jan 15 10:25 ultralist.txt.backup.20240115_102530
-rw-r--r-- 1 user staff 1.1M Jan 15 09:15 ultralist.txt.backup.20240115_091545
```

#### sorter.pl - Enhanced Fanboy Adblock Sorter v2.0

The `sorter.pl` script has been completely rewritten with modern Perl best practices and enhanced functionality.

**Basic Usage (Backward Compatible):**

```bash
perl scripts/sorter.pl filters/ultralist.txt
```

**Command Line Options:**

- `--help, -h`: Show comprehensive help
- `--verbose, -v`: Enable detailed logging
- `--backup-suffix`: Customize backup file suffix
- `--no-backup`: Skip backup creation
- `--dry-run`: Preview changes without modification

**Advanced Usage Examples:**

```bash
# Verbose processing with detailed statistics
perl scripts/sorter.pl --verbose filters/ultralist.txt

# Custom backup suffix
perl scripts/sorter.pl --backup-suffix .original filters/ultralist.txt

# Process multiple files without backups
perl scripts/sorter.pl --no-backup filters/*.txt

# Preview changes without making modifications
perl scripts/sorter.pl --dry-run --verbose filters/ultralist.txt
```

**Features:**

- **Modern Perl Standards**: Strict and warnings pragmas, UTF-8 support
- **Enhanced Error Handling**: Comprehensive file validation and graceful error recovery
- **Statistics and Monitoring**: File statistics, section counting, before/after comparison
- **Multi-file Support**: Process multiple files with individual error handling
- **Safety Features**: Atomic file operations, configurable backups, proper cleanup

### 🛠️ Other Utility Scripts

#### Domain-Specific Processing Scripts

The repository includes several specialized scripts for processing different types of filter lists:

- `admiral-domains.sh`: Process Admiral anti-adblock domains
- `combined-filters.sh`: Generate combined filter lists
- `fanboy-social.sh`: Process Fanboy social media filters
- `malware-domains.sh`: Process malware domain lists
- `remove-lines.sh`: Remove specific lines from filter lists

#### Additional Tools

- `addChecksum.pl`: Add checksums to filter lists
- `FOP.py`: Filter Optimizer Python script

### 📋 Configuration

**Backup Configuration (checksum-sort.sh):**

```bash
readonly BACKUP_DIR="${SCRIPT_DIR}/../backup"  # Backup storage location
readonly MAX_BACKUPS=10                        # Maximum backups to retain
```

**Customization Options:**

- Modify `BACKUP_DIR` to change backup location
- Adjust `MAX_BACKUPS` to change retention policy
- Logging format can be customized in log functions

### 🔄 Workflow Examples

**Basic Filter Processing Workflow:**

```bash
# 1. Process and sort a filter list with backup
./scripts/checksum-sort.sh filters/ultralist.txt

# 2. Check processing results
./scripts/checksum-sort.sh --list-backups filters/ultralist.txt

# 3. If needed, manually sort with verbose output
perl scripts/sorter.pl --verbose filters/ultralist.txt
```

**Development Workflow:**

```bash
# 1. Test changes without modification
perl scripts/sorter.pl --dry-run --verbose filters/test-filter.txt

# 2. Apply changes with custom backup
perl scripts/sorter.pl --backup-suffix .dev filters/test-filter.txt

# 3. Process with full backup and verification
./scripts/checksum-sort.sh filters/test-filter.txt
```

### ⚠️ Important Notes

- All scripts maintain backward compatibility with existing workflows
- Backup files are automatically managed and rotated
- UTF-8 encoding is supported for international filter lists
- Cross-platform compatibility ensures consistent behavior on Linux and macOS
- Process-safe temporary files prevent conflicts during concurrent operations

## 💬 EasyList Forum

Join the EasyList Forum @ [https://forums.lanik.us](https://forums.lanik.us) for faster reporting of issues and chat.

## 🌐 Mirror Hosts of Web Annoyances Ultralist

TBD

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
