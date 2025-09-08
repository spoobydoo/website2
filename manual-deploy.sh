#!/bin/bash

# Build the Next.js app
echo "Building Next.js app..."
npm run build

# Create necessary files for GitHub Pages
echo "Creating GitHub Pages files..."
touch out/.nojekyll

# Add a script to redirect from 404.html to index.html
cat > out/404.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script>
    // Get the current path (everything after the domain)
    var path = window.location.pathname;
    
    // Strip any trailing slash
    if (path.endsWith('/')) {
      path = path.slice(0, -1);
    }
    
    // If the path is just /George-Port or empty, go to the index page
    if (path === '/George-Port' || path === '') {
      window.location.replace('/George-Port/');
    } else {
      // Otherwise, redirect to the index page with the current path as a query parameter
      window.location.replace('/George-Port/?path=' + encodeURIComponent(path.replace('/George-Port', '')));
    }
  </script>
</head>
<body>
  <p>Redirecting...</p>
</body>
</html>
EOF

echo "Deployment files ready in the 'out' directory."
echo "You can now deploy the 'out' directory to GitHub Pages."
