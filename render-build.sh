#!/bin/bash
# Build script for Render deployment

# Set execution directory to the script's location
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "Current directory: $(pwd)"
echo "Listing directory contents:"
ls -la

# Install dependencies
echo "Installing dependencies..."
npm install

# Run Next.js build
echo "Building Next.js site..."
npm run build

# Check if the build was successful by verifying the out directory
if [ ! -d "out" ]; then
  echo "ERROR: Build failed, 'out' directory not created."
  echo "Trying alternative build approach..."
  
  # Try building with next export
  npx next build
  npx next export
fi

# Create dist directory for Render
echo "Creating dist directory..."
mkdir -p dist

# Check if out directory exists now
if [ -d "out" ]; then
  # Copy all required files to dist
  echo "Copying files to dist..."
  cp -r out/* dist/
  
  # Copy the render-index.html to dist/index.html
  echo "Setting up index.html..."
  if [ -f "public/render-index.html" ]; then
    cp public/render-index.html dist/index.html
  else
    echo "WARNING: render-index.html not found, using default index.html"
    # Create a simple index.html if the file doesn't exist
    echo "<html><head><meta http-equiv='refresh' content='0; URL=/index.html'></head><body></body></html>" > dist/index.html
  fi
else
  echo "ERROR: Build failed, no 'out' directory to copy from."
  echo "Copying public directory as fallback..."
  cp -r public/* dist/
fi

echo "Build complete! Files are in the dist directory."
