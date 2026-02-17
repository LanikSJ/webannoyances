#!/usr/bin/env bash
# checksum-sort.sh - Sort and add checksums to filter files
# Usage: ./checksum-sort.sh <filter-file>

set -euo pipefail # Exit on error, undefined vars, and pipe failures

# Logging functions
log_info() {
  echo "$*" >&2
}

log_error() {
  echo "❌ $*" >&2
}

log_warning() {
  echo "⚠️ $*" >&2
}

# Validate input arguments
validate_input() {
  if [[ $# -eq 0 ]]; then
    log_error "Usage: $0 <filter-file>"
    log_error "Example: $0 filters/ultralist.txt"
    exit 1
  fi

  local file="$1"

  if [[ ! -f "$file" ]]; then
    log_error "File '$file' does not exist or is not a regular file"
    exit 1
  fi

  if [[ ! -r "$file" ]]; then
    log_error "File '$file' is not readable"
    exit 1
  fi

  if [[ ! -w "$file" ]]; then
    log_error "File '$file' is not writable"
    exit 1
  fi
}

# Validate FOP CLI is installed
validate_fop() {
  if ! command -v fop >/dev/null 2>&1; then
    log_error "FOP CLI not found. Please install fop-cli: npm install -g fop-cli"
    exit 1
  fi
}

# Process the filter file
process_file() {
  local file="$1"

  log_info "🔄 Processing file: $file"

  # Run FOP on the file (FOP handles sorting and checksums)
  log_info "🔧 Running FOP on the file..."
  if ! fop --check-file="$file"; then
    log_error "FOP execution failed on the file"
    exit 1
  fi

  log_info "✅ Successfully processed '$file'"
}

# Main function
main() {
  local file=""

  # Parse command line arguments
  while [[ $# -gt 0 ]]; do
    case $1 in
      --help | -h)
        echo "Usage: $0 <filter-file>"
        echo ""
        echo "Options:"
        echo "  --help, -h              Show this help message"
        echo ""
        echo "Examples:"
        echo "  $0 filters/ultralist.txt"
        exit 0
        ;;
      -*)
        log_error "Unknown option: $1"
        log_error "Use --help for usage information"
        exit 1
        ;;
      *)
        if [[ -z "$file" ]]; then
          file="$1"
        else
          log_error "Multiple files specified. Only one file can be processed at a time."
          exit 1
        fi
        shift
        ;;
    esac
  done

  # Check if file was provided
  if [[ -z "$file" ]]; then
    log_error "Usage: $0 <filter-file>"
    log_error "Use --help for more information"
    exit 1
  fi

  log_info "🚀 Starting checksum-sort process for: $file"

  # Validate input
  validate_input "$file"

  # Validate FOP CLI
  validate_fop

  # Process the file
  process_file "$file"

  log_info "✅ Done! '$file' has been sorted and checksums have been added."
}

# Run main function with all arguments
main "$@"