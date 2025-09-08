# George Lock - Social Media Expert Portfolio

A professional portfolio website showcasing George Lock's expertise in social media management, content creation, and digital marketing.

## 🌐 Live Deployments

- [GitHub Pages](https://wftaylor28.github.io/website2/)
- [Render](https://your-render-url.onrender.com)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run start
```

## 📦 Deployment

### GitHub Pages Deployment

This project is configured for automatic GitHub Pages deployment using GitHub Actions:

1. Push changes to the `main` branch
2. GitHub Actions workflow builds the site and deploys to the `gh-pages` branch
3. The site is available at `https://[username].github.io/website2/`

**Note:** Ensure GitHub Actions has write permissions for your repository:
1. Go to repository Settings → Actions → General → Workflow permissions
2. Select "Read and write permissions"
3. Save changes

### Render Deployment

To deploy on Render:

1. Create a new Static Site on Render
2. Connect to your GitHub repository
3. Use these settings:
   - Build Command: `./render-build.sh`
   - Publish Directory: `dist`

## 🛠️ Technology Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** GitHub Pages & Render

## 🧩 Project Structure

```
website2/
├── public/         # Static assets
├── src/
│   ├── app/        # Next.js app directory
│   ├── components/ # Reusable components
│   └── styles/     # Global styles
├── next.config.js  # Next.js configuration
└── tsconfig.json   # TypeScript configuration
```

## 🔧 Configuration Notes

- `basePath` and `assetPrefix` are set to `/website2` for GitHub Pages deployment
- Static export is enabled with `output: 'export'`
- Images are unoptimized for static hosting compatibility
