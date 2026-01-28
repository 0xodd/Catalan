# Cloudflare Pages Deployment Guide

This project is configured for deployment on Cloudflare Pages.

## Prerequisites

1. A GitHub repository with this code
2. A Cloudflare account
3. A .cat domain (or any domain) connected to Cloudflare

## Deployment Steps

### 1. Connect Your GitHub Repository

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages**
3. Click **Create a project**
4. Select **Connect to Git**
5. Authorize Cloudflare to access your GitHub account
6. Select your repository containing this code

### 2. Configure Build Settings

When prompted for build settings, use:

- **Framework preset**: None (or Vite)
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Environment variables**: Leave blank (unless using Supabase)

### 3. Add Environment Variables (if using Supabase)

If you plan to add Supabase integration later:

1. In your project settings, go to **Settings** → **Environment variables**
2. Add the following variables:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase public key

### 4. Connect Your Domain

1. Go to **Custom domain**
2. Add your .cat domain
3. Follow Cloudflare's DNS instructions

## Project Structure

```
.
├── src/                    # React source files
│   ├── App.tsx            # Main component with bilingual content
│   ├── main.tsx           # Entry point
│   └── index.css           # Tailwind styles
├── public/                # Static assets
├── dist/                  # Build output (deployed to Cloudflare)
├── _redirects             # URL rewrite rules (SPA routing)
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS config
└── package.json           # Dependencies and scripts
```

## Build Process

The build command (`npm run build`) automatically:

1. Compiles TypeScript and React with Vite
2. Optimizes assets with esbuild
3. Copies the `_redirects` file to the dist folder

The `_redirects` file handles single-page app (SPA) routing, ensuring all routes serve `index.html`.

## Features

- ✅ Bilingual (Catalan & English)
- ✅ Responsive design with Tailwind CSS
- ✅ SPA routing configured for Cloudflare Pages
- ✅ Optimized builds with esbuild
- ✅ Ready for Supabase integration
- ✅ SEO optimized with meta tags

## Troubleshooting

### Build fails with "node_modules not found"

Cloudflare Pages automatically runs `npm install` before building. Make sure `package-lock.json` is in your repo.

### Site shows 404 on routes other than home

Ensure `_redirects` file is in the `dist` folder after building. The build script automatically copies it.

### Environment variables not loading

For Vite, environment variables must be prefixed with `VITE_`. Check that your variable names start with this prefix.

## Next Steps

- Add Supabase authentication and database
- Integrate with external APIs via Edge Functions
- Add more language support
- Set up analytics with Cloudflare Web Analytics
