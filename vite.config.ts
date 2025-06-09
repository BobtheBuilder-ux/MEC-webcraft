import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'generate-htaccess',
      closeBundle() {
        const htaccessContent = `# Enable rewriting
RewriteEngine On

# Allow access from all origins
Header set Access-Control-Allow-Origin "*"

# Handle client-side routing
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.html [QSA,L]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/x-javascript application/json
</IfModule>

# Set security headers but allow necessary access
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-XSS-Protection "1; mode=block"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
    
    # Ensure assets can be loaded
    <FilesMatch "\\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$">
        Header set Access-Control-Allow-Origin "*"
    </FilesMatch>
</IfModule>

# Cache control
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/html "access plus 1 hour"
    ExpiresByType text/css "access plus 1 week"
    ExpiresByType text/javascript "access plus 1 week"
    ExpiresByType application/javascript "access plus 1 week"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType image/webp "access plus 1 month"
    ExpiresByType image/svg+xml "access plus 1 month"
    ExpiresByType image/x-icon "access plus 1 year"
</IfModule>

# Set default handler
<IfModule mod_dir.c>
    DirectoryIndex index.html
</IfModule>

# Allow .htaccess to be viewed by web server
<Files .htaccess>
    Order Allow,Deny
    Allow from all
</Files>

# Set proper permissions for web files
<FilesMatch "\\.(html|htm|js|css|jpg|jpeg|png|gif|ico|svg|woff|woff2|ttf|eot)$">
    Order Allow,Deny
    Allow from all
</FilesMatch>`;

        fs.writeFileSync('dist/.htaccess', htaccessContent);
      }
    }
  ],
  base: '/',
  server: {
    host: "localhost",
    port: 8080
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
