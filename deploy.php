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

// Ensure public_html exists and has correct permissions
if (!file_exists('public_html')) {
    mkdir('public_html', 0755, true);
}

echo "Deployment completed successfully!\n";