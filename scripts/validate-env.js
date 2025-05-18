const fs = require('fs');
const dotenv = require('dotenv');
const path = require('path');

function validateEnvFile(envPath, requiredVars) {
  const absolutePath = path.resolve(__dirname, '..', envPath);
  
  if (!fs.existsSync(absolutePath)) {
    console.error(`❌ ${envPath} file not found`);
    process.exit(1);
  }

  const env = dotenv.parse(fs.readFileSync(absolutePath));
  const missingVars = requiredVars.filter(varName => !env[varName]);

  if (missingVars.length > 0) {
    console.error(`❌ Missing required variables in ${envPath}:`);
    missingVars.forEach(varName => console.error(`   - ${varName}`));
    process.exit(1);
  }

  // Basic format validation
  const invalidVars = [];
  Object.entries(env).forEach(([key, value]) => {
    // URL validation
    if (key.includes('URL') && !isValidUrl(value)) {
      invalidVars.push(`${key}: Invalid URL format`);
    }
    // Email validation - only for service account and user emails
    if ((key === 'GOOGLE_SERVICE_ACCOUNT_EMAIL' || key === 'EMAIL_USER') && !isValidEmail(value)) {
      invalidVars.push(`${key}: Invalid email format`);
    }
    // Port validation
    if (key === 'PORT' && !isValidPort(value)) {
      invalidVars.push(`${key}: Port must be a number between 1 and 65535`);
    }
    // Firebase API key validation
    if ((key === 'VITE_FIREBASE_API_KEY' || key === 'VITE_CALENDAR_API_KEY') && !isValidFirebaseApiKey(value)) {
      invalidVars.push(`${key}: Invalid API key format`);
    }
    // Environment validation
    if (key === 'NODE_ENV' && !isValidNodeEnv(value)) {
      invalidVars.push(`${key}: Must be 'development', 'production', or 'test'`);
    }
    // Calendar ID validation
    if (key === 'GOOGLE_CALENDAR_ID' && !isValidEmail(value)) {
      invalidVars.push(`${key}: Must be a valid calendar ID (email format)`);
    }
    // Password/key presence validation (just check if not empty)
    if ((key === 'EMAIL_PASSWORD' || key === 'GOOGLE_PRIVATE_KEY') && !value.trim()) {
      invalidVars.push(`${key}: Cannot be empty`);
    }
  });

  if (invalidVars.length > 0) {
    console.error(`\n❌ Invalid environment variables in ${envPath}:`);
    invalidVars.forEach(error => console.error(`   - ${error}`));
    process.exit(1);
  }
}

// Validation helper functions
function isValidUrl(value) {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPort(value) {
  const port = parseInt(value, 10);
  return !isNaN(port) && port >= 1 && port <= 65535;
}

function isValidFirebaseApiKey(value) {
  return /^AIza[0-9A-Za-z-_]{35}$/.test(value);
}

function isValidNodeEnv(value) {
  return ['development', 'production', 'test'].includes(value);
}

// Frontend required variables
const frontendVars = [
  'VITE_API_URL',
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID',
  'VITE_FIREBASE_MEASUREMENT_ID',
  'VITE_CALENDAR_API_URL',
  'VITE_CALENDAR_API_KEY',
  'VITE_GEMINI_API_KEY'
];

// Backend required variables
const backendVars = [
  'PORT',
  'NODE_ENV',
  'EMAIL_USER',
  'EMAIL_PASSWORD',
  'GOOGLE_CALENDAR_ID',
  'GOOGLE_SERVICE_ACCOUNT_EMAIL',
  'GOOGLE_PRIVATE_KEY'
];

console.log('🔍 Validating environment files...');

try {
  // Validate frontend production env
  console.log('\nChecking frontend production environment...');
  validateEnvFile('.env.production', frontendVars);

  // Validate backend production env
  console.log('\nChecking backend production environment...');
  validateEnvFile('server/.env.production', backendVars);

  console.log('\n✅ All environment files are properly configured and formatted correctly!');
} catch (error) {
  console.error('\n❌ Error during validation:', error.message);
  process.exit(1);
}