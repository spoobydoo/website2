#!/usr/bin/env bash

# Source the deployment helpers
source ./deploy-helpers.sh

# Default target is GitHub Pages
TARGET=${1:-"github"}

echo -e "${YELLOW}Building portfolio site for ${TARGET}...${NC}"

case "$TARGET" in
  "github")
    build_for_github
    echo -e "${GREEN}Build completed successfully! The site files are in the 'out' directory.${NC}"
    echo -e "${YELLOW}To deploy to GitHub Pages, run: npm run deploy${NC}"
    ;;
    
  "render")
    build_for_render
    if [ $? -eq 0 ]; then
      echo -e "${GREEN}Build completed successfully! The site files are in the 'dist' directory.${NC}"
      echo -e "${YELLOW}To deploy to Render, push to the main branch and Render will automatically deploy.${NC}"
    else
      echo -e "${RED}Build failed for Render. Check the error messages above.${NC}"
      exit 1
    fi
    ;;
    
  *)
    echo -e "${RED}Unknown target: ${TARGET}${NC}"
    echo -e "${YELLOW}Valid targets are: github, render${NC}"
    exit 1
    ;;
esac
