#!/bin/bash
# Build script for Render deployment

# Run Next.js build
echo "Building Next.js site..."
npm run build

# Create dist directory for Render
echo "Creating dist directory..."
mkdir -p dist

# Copy all required files to dist
echo "Copying files to dist..."
cp -r out/* dist/

# Copy the render-index.html to dist/index.html
echo "Setting up index.html..."
cp public/render-index.html dist/index.html

echo "Build complete! Files are in the dist directory."
