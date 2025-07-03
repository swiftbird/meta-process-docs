# Vercel Deployment Guide - Lapis Labs Meta-Process Docs

## 🚀 Quick Deployment Steps

### 1. **Prepare Repository**
```bash
# Ensure you're in the project root
cd /Volumes/BlueDisk/Development/meta_process_docs_20250703_141526_317da012

# Add all files to git
git add .
git commit -m "Initial commit: Lapis Labs Meta-Process Documentation Site"
```

### 2. **GitHub Repository Setup**
```bash
# Create repository on GitHub (replace with actual repo URL)
# Go to: https://github.com/new
# Repository name: meta-process-docs
# Description: Lapis Labs Meta-Process Documentation Site

# Connect local repo to GitHub
git remote add origin https://github.com/[YOUR-USERNAME]/meta-process-docs.git
git branch -M main
git push -u origin main
```

### 3. **Vercel Deployment**

#### Option A: Vercel CLI (Recommended)
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? [your-account]
# - Link to existing project? N  
# - Project name: lapis-labs-meta-process-docs
# - Directory: ./src
# - Build command: npm run build
# - Output directory: dist
# - Development command: npm run dev
```

#### Option B: Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Click "Import Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `src`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 4. **Deployment Configuration**

The project includes optimized Vercel configuration:

**vercel.json features:**
- ✅ Static build configuration
- ✅ SPA routing support
- ✅ Security headers
- ✅ Cache optimization
- ✅ Custom domain ready

**package.json features:**
- ✅ Optimized build scripts
- ✅ Proper metadata
- ✅ Vercel-specific build command
- ✅ Repository links

### 5. **Post-Deployment**

After successful deployment:

```bash
# Production deployment
vercel --prod

# Custom domain (optional)
vercel domains add meta-process.lapis-labs.com
```

## 🔗 Expected URLs

- **Preview Deployments**: `https://lapis-labs-meta-process-docs-[hash].vercel.app`
- **Production**: `https://lapis-labs-meta-process-docs.vercel.app`
- **Custom Domain**: `https://meta-process.lapis-labs.com` (if configured)

## ⚡ Build Optimization

The site is optimized for Vercel:
- **Bundle Size**: 12.51 kB HTML, 8.63 kB CSS, 7.59 kB JS
- **Build Time**: ~60ms
- **Gzip Compression**: Enabled
- **Static Generation**: Full static site
- **CDN Ready**: All assets optimized

## 🎯 Performance Expectations

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <2.5s
- **Cumulative Layout Shift**: <0.1

## 🔄 Continuous Deployment

Once connected to GitHub:
- ✅ Auto-deploy on `main` branch push
- ✅ Preview deployments for PRs
- ✅ Automatic builds and optimization
- ✅ Built-in analytics and monitoring

## 🛠️ Local Development Commands

```bash
# Development server (port 3002)
cd src && npm run dev -- --port 3002

# Production build
cd src && npm run build

# Preview production build (port 3003)  
cd src && npm run preview -- --port 3003

# Vercel dev (simulates Vercel environment)
vercel dev
```

## 📊 Success Metrics

After deployment, verify:
- [ ] Site loads correctly on Vercel URL
- [ ] All interactive features work
- [ ] Context generator functions properly
- [ ] Responsive design works on mobile
- [ ] Performance scores meet targets
- [ ] SEO metadata is correct

---

**Estimated Deployment Time**: 5-10 minutes
**Zero Configuration**: Fully automated with meta-process setup
**Production Ready**: Optimized for scale and performance
