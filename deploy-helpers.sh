#!/bin/bash
# Helper script for deployment tasks

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Make the script executable
chmod +x render-build.sh

# Function to build for GitHub Pages
build_for_github() {
  echo -e "${YELLOW}Building for GitHub Pages...${NC}"
  export NODE_ENV=production
  npm run build
  
  echo -e "${YELLOW}Creating .nojekyll file...${NC}"
  touch out/.nojekyll
}

# Function to build for Render
build_for_render() {
  echo -e "${YELLOW}Building for Render...${NC}"
  
  # Make sure the render build script is executable
  chmod +x render-build.sh
  
  echo -e "${YELLOW}Testing render build script locally...${NC}"
  ./render-build.sh
  
  if [ -d "dist" ]; then
    echo -e "${GREEN}✅ Build succeeded! 'dist' directory created.${NC}"
    echo -e "${YELLOW}Contents of dist directory:${NC}"
    ls -la dist/
    return 0
  else
    echo -e "${RED}❌ Build failed! 'dist' directory not created.${NC}"
    return 1
  fi
  
  echo -e "${YELLOW}Fixing asset paths in HTML files...${NC}"
  find out -name "*.html" -exec sed -i 's|"/_next/|"/website2/_next/|g' {} \;
  find out -name "*.html" -exec sed -i "s|'/_next/|'/website2/_next/|g" {} \;
  
  echo -e "${GREEN}✅ Build for GitHub Pages completed!${NC}"
  echo -e "Files are in the ${YELLOW}out/${NC} directory"
}

# Function to build for Render
build_for_render() {
  echo -e "${YELLOW}Building for Render...${NC}"
  ./render-build.sh
  
  echo -e "${GREEN}✅ Build for Render completed!${NC}"
  echo -e "Files are in the ${YELLOW}dist/${NC} directory"
}

# Function to check GitHub repo settings
check_github_settings() {
  echo -e "${YELLOW}GitHub Repository Settings Checklist:${NC}"
  echo -e "1. Go to repository Settings → Actions → General → Workflow permissions"
  echo -e "2. Select ${GREEN}\"Read and write permissions\"${NC}"
  echo -e "3. Save changes"
  echo -e ""
  echo -e "4. Go to repository Settings → Pages"
  echo -e "5. Ensure ${GREEN}Source${NC} is set to ${GREEN}\"Deploy from a branch\"${NC}"
  echo -e "6. Ensure ${GREEN}Branch${NC} is set to ${GREEN}\"gh-pages / (root)\"${NC}"
  echo -e ""
  echo -e "${YELLOW}After pushing to main, GitHub Actions will:${NC}"
  echo -e "1. Build the site"
  echo -e "2. Deploy to gh-pages branch"
  echo -e "3. Make it available at https://[username].github.io/website2/"
}

# Check command line arguments
case "$1" in
  github)
    build_for_github
    ;;
  render)
    build_for_render
    ;;
  check)
    check_github_settings
    ;;
  *)
    echo -e "${YELLOW}Usage:${NC} ./deploy-helpers.sh [option]"
    echo -e "Options:"
    echo -e "  ${GREEN}github${NC}  - Build for GitHub Pages"
    echo -e "  ${GREEN}render${NC}  - Build for Render"
    echo -e "  ${GREEN}check${NC}   - Show GitHub settings checklist"
    ;;
esac
