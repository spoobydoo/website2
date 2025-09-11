#!/bin/bash
# Script to update About Me section

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Updating About Me section in HTML files...${NC}"

# Create a temporary file with updated content
create_updated_file() {
  local input_file=$1
  local output_file="${input_file}.tmp"
  
  # Use awk for more precise text replacement in HTML
  awk '{
    # Replace the text in the About Me section
    if (index($0, "My name is George Lock. I am a recent graduate from Temple University with my Bachelors in Arts. I had recently seen the job listing for Impotola") > 0) {
      sub("My name is George Lock. I am a recent graduate from Temple University with my Bachelors in Arts. I had recently seen the job listing for Impotola.*work for\\.", "My name is George Lock. I am a recent graduate from Temple University with my Bachelors in Arts.");
    }
    print;
  }' "$input_file" > "$output_file"
  
  # Replace original with updated file
  mv "$output_file" "$input_file"
}

# Update main index.html
if [ -f "index.html" ]; then
  echo -e "Updating index.html..."
  create_updated_file "index.html"
fi

# Update about page
if [ -f "about/index.html" ]; then
  echo -e "Updating about/index.html..."
  create_updated_file "about/index.html"
fi

echo -e "${GREEN}Updates complete!${NC}"
