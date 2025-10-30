# Reincarnated Shop - Deployment Guide

## 🚀 Quick Deploy to Netlify

### Option 1: Deploy via Netlify CLI (Recommended)

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Build the project**
```bash
npm run build
```

3. **Deploy to Netlify**
```bash
netlify deploy --prod
```

### Option 2: Deploy via Netlify Dashboard

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select your repository
   - Build settings are already configured in `netlify.toml`
   - Click "Deploy site"

### Option 3: Drag & Drop Deploy

1. **Build the project**
```bash
npm run build
```

2. **Deploy**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `dist` folder

---

## 📋 Pre-Deployment Checklist

### ✅ Code Quality
- [x] All pages are responsive (Hero, Shop, About, Contact)
- [x] Mobile hamburger menu implemented
- [x] Loading states for images
- [x] Error handling for failed images
- [x] Cart functionality working
- [x] Payment modal with reference codes

### ✅ Security
- [x] Security headers configured (`_headers` and `netlify.toml`)
- [x] Environment variables template created (`.env.example`)
- [x] `.gitignore` configured properly
- [x] No sensitive data in code

### ✅ Performance
- [x] Images optimized
- [x] Cache headers configured
- [x] Code splitting ready (Vite handles this)

### ✅ SEO Basics
- [ ] Add meta tags to `index.html`
- [ ] Add favicon
- [ ] Add sitemap.xml
- [ ] Add robots.txt

---

## 🔧 Configuration Files

### `netlify.toml`
- Build command: `npm run build`
- Publish directory: `dist`
- Redirects for SPA routing
- Security headers
- Cache control

### `public/_headers`
- Additional security headers
- Cache control for static assets

---

## 🌐 Custom Domain Setup

After deployment:

1. **Buy a domain** (Namecheap, GoDaddy, etc.)

2. **Add to Netlify**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain (e.g., `reincarnated.shop`)

3. **Configure DNS**
   - Add Netlify's nameservers to your domain registrar
   - Or add A record pointing to Netlify's load balancer

4. **Enable HTTPS**
   - Netlify provides free SSL certificates
   - Auto-enabled for custom domains

---

## 📱 Post-Deployment Testing

Test on multiple devices:
- [ ] Desktop (Chrome, Firefox, Safari)
- [ ] Mobile (iOS Safari, Android Chrome)
- [ ] Tablet

Test all features:
- [ ] Navigation works
- [ ] Cart adds/removes items
- [ ] Payment modal displays correctly
- [ ] Contact form (currently shows alert)
- [ ] All images load
- [ ] Mobile menu works

---

## 🔐 Environment Variables

If you need to add environment variables in Netlify:

1. Go to Site settings → Environment variables
2. Add your variables (they should start with `VITE_`)
3. Redeploy the site

---

## 📊 Analytics (Optional)

Add Google Analytics:

1. Get tracking ID from Google Analytics
2. Add to `index.html` in the `<head>` section
3. Redeploy

---

## 🐛 Troubleshooting

### Build fails
- Check Node version (should be 20)
- Run `npm install` locally
- Check for errors in build logs

### 404 errors on refresh
- Ensure `netlify.toml` has the redirect rule
- Check that `_redirects` file exists in `public/`

### Images not loading
- Check image paths (should be in `public/` folder)
- Ensure images are committed to git
- Check browser console for errors

---

## 📈 Next Steps After Deployment

1. **Set up admin dashboard** (future feature)
2. **Integrate payment gateway** (when ready)
3. **Add order management system**
4. **Set up email notifications**
5. **Add product database** (Firebase/Supabase)
6. **Implement user authentication**

---

## 🎉 You're Ready to Deploy!

Your site is production-ready with:
- ✅ Responsive design
- ✅ Mobile-friendly navigation
- ✅ Shopping cart functionality
- ✅ Payment information display
- ✅ Security headers
- ✅ Performance optimization
- ✅ Error handling

Run `npm run build` and deploy! 🚀
