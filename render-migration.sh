#!/bin/bash
# Script to migrate from GitHub Pages to Render deployment

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}    RENDER DEPLOYMENT MIGRATION TOOL    ${NC}"
echo -e "${BLUE}========================================${NC}"
echo

echo -e "${YELLOW}This script will help you migrate from GitHub Pages to Render deployment.${NC}"
echo

# Check current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo -e "${YELLOW}Current branch: ${GREEN}$CURRENT_BRANCH${NC}"

if [ "$CURRENT_BRANCH" != "main" ]; then
  echo -e "${RED}WARNING: You are not on the main branch.${NC}"
  echo -e "${YELLOW}Render should be configured to deploy from the main branch.${NC}"
  echo -e "Do you want to switch to the main branch? (y/n)${NC}"
  read -r answer
  if [ "$answer" == "y" ]; then
    git checkout main
    echo -e "${GREEN}Switched to main branch.${NC}"
  fi
fi

# Test Render build
echo -e "${YELLOW}Testing Render build process...${NC}"
npm run build:render

if [ $? -eq 0 ]; then
  echo -e "${GREEN}✅ Render build test successful!${NC}"
  echo
  echo -e "${YELLOW}Next steps for deploying to Render:${NC}"
  echo -e "1. Push your changes to GitHub: ${GREEN}git push origin main${NC}"
  echo -e "2. Go to the Render dashboard and create a new Static Site"
  echo -e "3. Connect to this GitHub repository"
  echo -e "4. Select the ${GREEN}main${NC} branch"
  echo -e "5. Set the build command to: ${GREEN}npm run render-build${NC}"
  echo -e "6. Set the publish directory to: ${GREEN}dist${NC}"
  echo -e "7. Click ${GREEN}Create Static Site${NC}"
  echo
  echo -e "Alternatively, use the Blueprint deployment option and Render will"
  echo -e "automatically configure the site using the ${GREEN}render.yaml${NC} file."
else
  echo -e "${RED}❌ Render build test failed.${NC}"
  echo -e "${YELLOW}Please fix the errors before deploying to Render.${NC}"
fi
