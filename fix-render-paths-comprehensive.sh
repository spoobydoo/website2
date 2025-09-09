#!/bin/bash
# Comprehensive script to fix paths in all files for Render deployment

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting comprehensive path fixing for Render deployment...${NC}"

# 1. Fix paths in HTML files
echo -e "${YELLOW}Fixing HTML files...${NC}"
find . -type f -name "*.html" | while read -r file; do
  echo "  Processing $file..."
  sed -i 's|/website2/|/|g' "$file"
  sed -i 's|/website2"|/"|g' "$file"
  # Fix any cases where href or src attributes still have /website2
  sed -i 's|href="/website2|href="/|g' "$file"
  sed -i 's|src="/website2|src="/|g' "$file"
done

# 2. Fix JavaScript files that might reference these paths
echo -e "${YELLOW}Fixing JavaScript files...${NC}"
find _next -type f -name "*.js" 2>/dev/null | while read -r file; do
  echo "  Processing $file..."
  sed -i 's|/website2/|/|g' "$file"
  sed -i 's|"/website2/|"/|g' "$file"
  sed -i "s|'/website2/|'/|g" "$file"
done

# 3. Fix CSS files
echo -e "${YELLOW}Fixing CSS files...${NC}"
find _next -type f -name "*.css" 2>/dev/null | while read -r file; do
  echo "  Processing $file..."
  sed -i 's|/website2/|/|g' "$file"
done

# 4. Create a rewrite rule for Render to handle any remaining /website2/ URLs
echo -e "${YELLOW}Creating rewrite rules for Render...${NC}"
cat > _redirects << EOF
/website2/*  /:splat  301
EOF

echo -e "${GREEN}Path fixing complete!${NC}"
echo -e "Next steps:"
echo -e "1. Commit and push these changes"
echo -e "2. Redeploy your site on Render"
