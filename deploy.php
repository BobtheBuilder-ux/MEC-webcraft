<?php
echo "Starting deployment process...\n";

// Run npm install
echo "Installing npm dependencies...\n";
exec('npm install', $output, $returnVar);
if ($returnVar !== 0) {
    echo "Error installing npm dependencies\n";
    exit(1);
}

// Run production build
echo "Building production assets...\n";
exec('npm run build:production', $output, $returnVar);
if ($returnVar !== 0) {
    echo "Error building production assets\n";
    exit(1);
}

// Ensure public_html directory exists
if (!is_dir(__DIR__ . '/public_html')) {
    mkdir(__DIR__ . '/public_html', 0755, true);
}

// Copy the pre-built assets if they exist in the repository
function copyDirectory($src, $dst) {
    $dir = opendir($src);
    @mkdir($dst);
    while (($file = readdir($dir))) {
        if (($file != '.') && ($file != '..')) {
            if (is_dir($src . '/' . $file)) {
                copyDirectory($src . '/' . $file, $dst . '/' . $file);
            } else {
                copy($src . '/' . $file, $dst . '/' . $file);
            }
        }
    }
    closedir($dir);
}

// Copy static assets
if (is_dir(__DIR__ . '/public_html/assets')) {
    copyDirectory(__DIR__ . '/public_html/assets', __DIR__ . '/public_html/assets');
}

// Ensure index.html exists
if (!file_exists(__DIR__ . '/public_html/index.html')) {
    copy(__DIR__ . '/index.html', __DIR__ . '/public_html/index.html');
}

// Create .htaccess for SPA routing
$htaccess = <<<EOT
Options -MultiViews
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [QSA,L]

# Enable CORS
Header set Access-Control-Allow-Origin "*"
Header set Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS"
Header set Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept"

# Caching
<FilesMatch "\.(js|css|jpg|jpeg|png|gif|ico)$">
Header set Cache-Control "max-age=31536000, public"
</FilesMatch>
EOT;

file_put_contents(__DIR__ . '/public_html/.htaccess', $htaccess);

echo "Deployment completed successfully!\n";