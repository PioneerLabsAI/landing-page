# PioneerLabs Landing Page Deployment Instructions

## Overview
This document provides instructions for deploying the PioneerLabs landing page to various hosting platforms.

## Files
The `pioneer-labs-landing-page.zip` file contains the complete built website ready for deployment. It includes:
- HTML files
- CSS files
- JavaScript files
- SVG assets

## Deployment Options

### Option 1: Static Hosting Services

#### Netlify
1. Go to [Netlify](https://www.netlify.com/) and sign up/login
2. Drag and drop the unzipped `dist` folder directly onto the Netlify dashboard
3. Your site will be deployed instantly with a Netlify subdomain
4. Configure your custom domain in the Netlify settings if needed

#### Vercel
1. Go to [Vercel](https://vercel.com/) and sign up/login
2. Create a new project and select "Upload" deployment option
3. Upload the unzipped `dist` folder
4. Your site will be deployed with a Vercel subdomain
5. Configure your custom domain in the Vercel settings if needed

### Option 2: Traditional Web Hosting

1. Unzip the `pioneer-labs-landing-page.zip` file
2. Upload the contents of the `dist` folder to your web hosting server using FTP or the hosting control panel
3. Ensure the files are placed in the appropriate public directory (often called `public_html`, `www`, or `htdocs`)

### Option 3: AWS S3 Static Website Hosting

1. Create an S3 bucket with a name matching your domain (e.g., `pioneerlabs.com`)
2. Enable "Static website hosting" in the bucket properties
3. Set the index document to `index.html`
4. Upload all files from the unzipped `dist` folder to the S3 bucket
5. Set the bucket policy to allow public read access
6. Access your website using the S3 website endpoint URL
7. For a custom domain, configure Route 53 or your DNS provider to point to the S3 bucket

## Post-Deployment

After deploying your website, be sure to:
1. Test all links and functionality
2. Verify the site looks correct on different devices and browsers
3. Set up analytics (Google Analytics, etc.)
4. Configure SEO meta tags if needed

## Need Help?

If you need assistance with deployment or have questions about customizing your landing page, please contact us.
