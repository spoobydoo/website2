#!/usr/bin/env bash

echo "Building portfolio site..."
npm run build

echo "Creating .nojekyll file in out directory..."
touch out/.nojekyll

echo "Build completed successfully! The site files are in the 'out' directory."
echo "To deploy to GitHub Pages, push the contents of the 'out' directory to the gh-pages branch."
