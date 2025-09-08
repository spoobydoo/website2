# GitHub Actions Deployment Guide

To fix the "Permission denied" error in GitHub Actions deployments, follow these steps:

## Step 1: Update GitHub Repository Settings

1. Go to your repository on GitHub: [https://github.com/spoobydoo/website2](https://github.com/spoobydoo/website2)
2. Click on **Settings** (tab at the top)
3. In the left sidebar, click on **Actions** → **General**
4. Scroll down to the **Workflow permissions** section
5. Select **Read and write permissions** 
6. Check the box for **Allow GitHub Actions to create and approve pull requests**
7. Click **Save**

## Step 2: Update Default Branch (if needed)

1. In the repository settings, go to **Branches** in the left sidebar
2. Under **Default branch**, click the switch button
3. Change the default branch to `gh-pages`
4. Confirm the change

## Step 3: Manual Re-run of the Workflow

1. Go to the **Actions** tab in your repository
2. Find the failed workflow run
3. Click the **Re-run jobs** button (or **Re-run all jobs** if that's the option)

After completing these steps, the GitHub Actions deployment should work correctly with the proper permissions.

## Troubleshooting

If you're still experiencing issues:

1. Check that the GitHub token has the correct permissions
2. Verify that the repository settings match the recommended settings above
3. Ensure that the Actions workflow has permission to write to the repository
