#!/bin/bash
# Script to diagnose and fix image loading issues

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}      IMAGE LOADING DIAGNOSIS          ${NC}"
echo -e "${BLUE}========================================${NC}"
echo

# Check image paths in HTML files
echo -e "${YELLOW}Checking image references in HTML files...${NC}"
IMAGE_REFS=$(grep -o 'src="[^"]*\.\(png\|jpg\|jpeg\|gif\|webp\|svg\)"' index.html | sort | uniq)
echo -e "${GREEN}Found $(echo "$IMAGE_REFS" | wc -l) unique image references${NC}"

# Verify image files exist
echo -e "\n${YELLOW}Verifying image files...${NC}"
MISSING_IMAGES=0
echo "$IMAGE_REFS" | while read -r img_ref; do
  img_path=$(echo "$img_ref" | sed 's|src="||' | sed 's|"$||')
  
  # Remove leading slash if present
  img_path_no_slash=$(echo "$img_path" | sed 's|^/||')
  
  # Check if file exists in images directory
  if [ -f "$img_path_no_slash" ]; then
    echo -e "  ${GREEN}✓ Found: $img_path_no_slash${NC}"
  else
    echo -e "  ${RED}✗ Missing: $img_path_no_slash${NC}"
    MISSING_IMAGES=$((MISSING_IMAGES + 1))
  fi
done

# Check public directory
echo -e "\n${YELLOW}Checking public directory...${NC}"
if [ -d "public/images" ]; then
  PUBLIC_IMAGES=$(find public/images -type f | wc -l)
  echo -e "  ${GREEN}Found $PUBLIC_IMAGES images in public directory${NC}"
else
  echo -e "  ${RED}Public images directory not found!${NC}"
  
  # Create public directory structure and copy images
  echo -e "\n${YELLOW}Creating public images directory and copying images...${NC}"
  mkdir -p public/images/work
  
  cp -rf images/*.png images/*.jpg images/*.svg public/images/ 2>/dev/null || true
  cp -rf images/work/*.png images/work/*.jpg images/work/*.webp public/images/work/ 2>/dev/null || true
  
  PUBLIC_IMAGES_AFTER=$(find public/images -type f | wc -l)
  echo -e "  ${GREEN}Copied $PUBLIC_IMAGES_AFTER images to public directory${NC}"
fi

# Check for webp conversion (often helps with performance)
echo -e "\n${YELLOW}Checking for WebP versions of PNG images...${NC}"
PNG_COUNT=$(find images -name "*.png" | wc -l)
WEBP_COUNT=$(find images -name "*.webp" | wc -l)
echo -e "  ${GREEN}Found $PNG_COUNT PNG files and $WEBP_COUNT WebP files${NC}"

echo -e "\n${BLUE}========================================${NC}"
echo -e "${BLUE}      DIAGNOSIS COMPLETE               ${NC}"
echo -e "${BLUE}========================================${NC}"

echo -e "\n${GREEN}Next steps:${NC}"
echo -e "1. Make sure all referenced image files exist"
echo -e "2. Ensure images are copied to the public directory during build"
echo -e "3. Check the network tab in DevTools to see which specific images fail to load"
echo -e "4. If specific images aren't loading, check their paths and MIME types"
