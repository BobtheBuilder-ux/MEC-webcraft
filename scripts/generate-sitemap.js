const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');

// Define your website URL
const baseUrl = 'https://mecwebcraft.com';

// Define all your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/projects', changefreq: 'weekly', priority: 0.8 },
  { url: '/blog', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.5 },
  // Auth pages (lower priority as they're not main content)
  { url: '/login', changefreq: 'monthly', priority: 0.3 },
  { url: '/register', changefreq: 'monthly', priority: 0.3 },
  { url: '/reset-password', changefreq: 'monthly', priority: 0.3 }
];

async function generateSitemap() {
  try {
    // Create a stream to write to
    const stream = new SitemapStream({ hostname: baseUrl });
    
    // Add routes to the stream
    const links = routes.map(route => ({
      url: route.url,
      changefreq: route.changefreq,
      priority: route.priority
    }));

    // Create sitemap from stream
    const data = await streamToPromise(Readable.from(links).pipe(stream));
    
    // Write sitemap to public directory
    fs.writeFileSync('./public/sitemap.xml', data);
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();