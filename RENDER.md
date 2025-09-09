# Website2 (Render Deployment)

This branch contains the static files for deployment on Render.

## Deployment Instructions

1. In your Render dashboard, create a new "Static Site"
2. Connect to this GitHub repository
3. Select the `render` branch
4. Configure the following settings:
   - **Build Command:** `echo "No build needed - using pre-built static files"`
   - **Publish Directory:** `.` (root directory, note the single dot)
5. Click "Create Static Site"

## Important Files

- `render.yaml` - Render configuration file
- `package.json` - Modified to skip build process
- `render-build.sh` - Simplified build script for Render
- `debug-deployment.sh` - Script to debug deployment issues

## Troubleshooting

If you encounter issues with the deployment:

1. Check the Render logs for specific error messages
2. Run `./debug-deployment.sh` locally to diagnose common issues
3. Verify that all files are properly pushed to the `render` branch
4. Ensure `render.yaml` is properly configured with:
   ```yaml
   services:
     - type: web
       name: george-portfolio
       runtime: static
       buildCommand: echo "No build needed - using static files"
       staticPublishPath: ./
   ```

## Dual Deployment Configuration

This repository supports both GitHub Pages and Render deployments:

- **GitHub Pages:** Uses the `gh-pages` branch with Next.js export
- **Render:** Uses the `render` branch with pre-built static files

### Migration Process

If you need to migrate from GitHub Pages to Render:

1. Run `./render-migration.sh` to set up the render branch
2. Push the render branch to GitHub
3. Configure the Render deployment as described above

The site will be deployed using the pre-built static files in this branch.
