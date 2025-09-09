#!/bin/bash
# Script to fix paths in HTML files for Render deployment

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Fixing paths in HTML files for Render...${NC}"

# Check if index.html exists
if [ -f "index.html" ]; then
  echo -e "Creating a Render-specific version of index.html..."
  
  # Create a copy for modification
  cp index.html index.html.render
  
  # Remove /website2 prefixes from paths
  sed -i 's|/website2/|/|g' index.html.render
  sed -i 's|/website2"|/"|g' index.html.render
  
  # Move the fixed file to index.html
  mv index.html.render index.html
  
  echo -e "${GREEN}✅ Successfully fixed paths in index.html${NC}"
else
  echo -e "${RED}❌ index.html not found${NC}"
fi

# Fix other HTML files
for file in about/index.html contact/index.html experience/index.html 404.html; do
  if [ -f "$file" ]; then
    echo -e "Fixing paths in $file..."
    
    # Create a copy for modification
    cp "$file" "$file.render"
    
    # Remove /website2 prefixes from paths
    sed -i 's|/website2/|/|g' "$file.render"
    sed -i 's|/website2"|/"|g' "$file.render"
    
    # Move the fixed file back
    mv "$file.render" "$file"
    
    echo -e "${GREEN}✅ Successfully fixed paths in $file${NC}"
  else
    echo -e "${RED}❌ $file not found${NC}"
  fi
done

echo -e "${GREEN}Path fixing complete!${NC}"
