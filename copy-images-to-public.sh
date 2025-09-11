#!/bin/bash
# Script to copy images to the public directory for Render deployment

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Copying images to public directory...${NC}"

# Create necessary directories if they don't exist
mkdir -p public/images/work

# Copy all images to public directory
echo "Copying main images..."
cp -f images/*.png images/*.jpg images/*.svg public/images/ 2>/dev/null || true

# Copy work images
echo "Copying work images..."
cp -f images/work/*.png images/work/*.jpg images/work/*.webp public/images/work/ 2>/dev/null || true

# Check if the images were copied successfully
echo -e "${YELLOW}Verifying copied images:${NC}"
ls -la public/images/ | grep -v "^d" | wc -l
ls -la public/images/work/ | grep -v "^d" | wc -l

echo -e "${GREEN}Image copying complete!${NC}"
