#!/bin/bash
# Simplified build script for Render deployment

# Set execution directory to the script's location
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "=== RENDER BUILD SCRIPT ==="
echo "Current directory: $(pwd)"
echo "Using pre-built static files - no build needed"
echo "Deployment will use files from root directory"
echo "=== RENDER BUILD COMPLETE ==="
