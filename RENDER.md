# Website2 (Render Deployment)

This branch contains the static files for deployment on Render.

## Deployment Instructions

1. In your Render dashboard, create a new "Static Site"
2. Connect to this GitHub repository
3. Select the `render` branch
4. Configure the following settings:
   - **Build Command:** `./fix-render-paths-comprehensive.sh`
   - **Publish Directory:** `.` (root directory, note the single dot)
5. Click "Create Static Site"

## Important Files

- `render.yaml` - Render configuration file
- `package.json` - Modified to skip build process
- `fix-render-paths-comprehensive.sh` - Script to fix paths for Render deployment
- `static.json` - Static site configuration for routing
- `_redirects` - URL rewriting rules for Render

## Troubleshooting

If you encounter issues with the deployment:

1. Check the Render logs for specific error messages
2. Run `./debug-deployment.sh` locally to diagnose common issues
3. Verify that all files are properly pushed to the `render` branch
4. Check that the paths in your HTML files don't contain `/website2/` prefixes
5. Ensure static resources like JavaScript and CSS files are properly loaded

## Path Fixing Process

The `fix-render-paths-comprehensive.sh` script does the following:

1. Removes `/website2/` prefixes from all HTML files
2. Updates JavaScript files to use correct paths
3. Updates CSS files to use correct paths
4. Creates rewrite rules to handle any remaining `/website2/` URLs

## Dual Deployment Configuration

This repository supports both GitHub Pages and Render deployments:

- **GitHub Pages:** Uses the `gh-pages` branch with `/website2/` prefixes
- **Render:** Uses the `render` branch with root-level paths

### Migration Process

If you need to migrate from GitHub Pages to Render:

1. Run `./render-migration.sh` to set up the render branch
2. Push the render branch to GitHub
3. Configure the Render deployment as described above

The site will be deployed using the fixed static files in this branch.
