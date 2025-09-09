# Render Deployment Guide

This document explains how to deploy this website to Render.

## Setup Instructions

### Option 1: Using Blueprint (Recommended)

1. In your Render dashboard, click on "New" and select "Blueprint"
2. Connect to this GitHub repository
3. Render will automatically detect the `render.yaml` configuration file and set up the deployment

### Option 2: Manual Configuration

1. In your Render dashboard, create a new "Static Site"
2. Connect to this GitHub repository
3. **IMPORTANT**: Select the `main` branch (not `gh-pages`)
4. Configure the following settings:
   - **Build Command:** `npm run render-build`
   - **Publish Directory:** `dist`

## How It Works

The `render-build.sh` script:
1. Builds the Next.js application
2. Creates a `dist` directory
3. Copies all built files to the `dist` directory
4. Places a simplified index.html as the main entry point

## Troubleshooting

If you encounter any issues with the deployment, check:
1. The build logs in the Render dashboard
2. Ensure all dependencies are properly installed
3. Verify that the `dist` directory is being correctly populated
