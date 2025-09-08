#!/bin/bash
# Debug script for checking deployment issues

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}      DEPLOYMENT DEBUG CHECKER         ${NC}"
echo -e "${BLUE}========================================${NC}"
echo

# Check if next.config.js has correct settings
echo -e "${YELLOW}Checking next.config.js settings...${NC}"
if grep -q "basePath.*'/website2'" next.config.js && grep -q "assetPrefix.*'/website2/'" next.config.js; then
  echo -e "${GREEN}✅ next.config.js has correct path settings${NC}"
else
  echo -e "${RED}❌ next.config.js may have incorrect path settings${NC}"
  echo -e "Expected configuration:"
  echo -e "  ${BLUE}basePath: process.env.NODE_ENV === 'production' ? '/website2' : ''${NC}"
  echo -e "  ${BLUE}assetPrefix: process.env.NODE_ENV === 'production' ? '/website2/' : ''${NC}"
fi
echo

# Check if GitHub Actions workflow has correct settings
echo -e "${YELLOW}Checking GitHub Actions workflow...${NC}"
if [ -f ".github/workflows/deploy.yml" ]; then
  if grep -q "permissions:" .github/workflows/deploy.yml && grep -q "contents: write" .github/workflows/deploy.yml; then
    echo -e "${GREEN}✅ GitHub Actions workflow has correct permissions${NC}"
  else
    echo -e "${RED}❌ GitHub Actions workflow may have incorrect permissions${NC}"
    echo -e "Expected configuration:"
    echo -e "${BLUE}    permissions:${NC}"
    echo -e "${BLUE}      contents: write${NC}"
  fi
  
  if grep -q "Fix asset paths" .github/workflows/deploy.yml; then
    echo -e "${GREEN}✅ GitHub Actions workflow has path-fixing step${NC}"
  else
    echo -e "${RED}❌ GitHub Actions workflow is missing path-fixing step${NC}"
  fi
else
  echo -e "${RED}❌ GitHub Actions workflow file not found${NC}"
fi
echo

# Check if package.json has correct scripts
echo -e "${YELLOW}Checking package.json scripts...${NC}"
if grep -q '"render-build":' package.json; then
  echo -e "${GREEN}✅ package.json has render-build script${NC}"
else
  echo -e "${RED}❌ package.json is missing render-build script${NC}"
fi
echo

# Check for render-build.sh
echo -e "${YELLOW}Checking render-build.sh...${NC}"
if [ -f "render-build.sh" ]; then
  if [ -x "render-build.sh" ]; then
    echo -e "${GREEN}✅ render-build.sh exists and is executable${NC}"
  else
    echo -e "${RED}❌ render-build.sh exists but is not executable${NC}"
    echo -e "Run: ${BLUE}chmod +x render-build.sh${NC}"
  fi
else
  echo -e "${RED}❌ render-build.sh not found${NC}"
fi
echo

# Check for .nojekyll file
echo -e "${YELLOW}Checking .nojekyll file...${NC}"
if [ -f "public/.nojekyll" ]; then
  echo -e "${GREEN}✅ .nojekyll exists in public directory${NC}"
else
  echo -e "${RED}❌ .nojekyll not found in public directory${NC}"
fi
echo

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}      DEPLOYMENT RECOMMENDATIONS        ${NC}"
echo -e "${BLUE}========================================${NC}"
echo
echo -e "1. ${YELLOW}For GitHub Pages:${NC}"
echo -e "   - Run: ${BLUE}./deploy-helpers.sh github${NC}"
echo -e "   - Push to main branch: ${BLUE}git add . && git commit -m \"Update deployment config\" && git push${NC}"
echo -e "   - Check GitHub Actions status in your repository"
echo
echo -e "2. ${YELLOW}For Render:${NC}"
echo -e "   - Run: ${BLUE}./deploy-helpers.sh render${NC}"
echo -e "   - Set up a new Static Site on Render with:"
echo -e "     * Build Command: ${BLUE}./render-build.sh${NC}"
echo -e "     * Publish Directory: ${BLUE}dist${NC}"
echo
echo -e "3. ${YELLOW}Check GitHub Repository Settings:${NC}"
echo -e "   - Run: ${BLUE}./deploy-helpers.sh check${NC}"
echo
echo -e "${BLUE}========================================${NC}"
