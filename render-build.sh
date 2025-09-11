#!/bin/bash
# Simplified build script for Render deployment

# Set execution directory to the script's location
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "=== RENDER BUILD SCRIPT ==="
echo "Current directory: $(pwd)"
echo "Using pre-built static files - no build needed"
echo "Deployment will use files from root directory"

# Fix paths for Render deployment
echo "Running path fixing script..."
chmod +x fix-render-paths-comprehensive.sh
./fix-render-paths-comprehensive.sh

# Copy images to public directory
echo "Copying images to public directory..."
chmod +x copy-images-to-public.sh
./copy-images-to-public.sh

echo "=== RENDER BUILD COMPLETE ==="
