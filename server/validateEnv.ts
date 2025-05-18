import { Buffer } from 'buffer';

interface ValidationResult {
  isValid: boolean;
  error?: string;
}

// Validate URL format
function isValidUrl(value: string): ValidationResult {
  try {
    new URL(value);
    return { isValid: true };
  } catch {
    return { isValid: false, error: 'Invalid URL format' };
  }
}

// Validate email format
function isValidEmail(value: string): ValidationResult {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return {
    isValid: emailRegex.test(value),
    error: emailRegex.test(value) ? undefined : 'Invalid email format'
  };
}

// Validate Firebase API key format
function isValidFirebaseApiKey(value: string): ValidationResult {
  const firebaseKeyRegex = /^AIza[0-9A-Za-z-_]{35}$/;
  return {
    isValid: firebaseKeyRegex.test(value),
    error: firebaseKeyRegex.test(value) ? undefined : 'Invalid Firebase API key format'
  };
}

// Validate Firebase Project ID format
function isValidFirebaseProjectId(value: string): ValidationResult {
  const projectIdRegex = /^[a-z0-9-]+$/;
  return {
    isValid: projectIdRegex.test(value),
    error: projectIdRegex.test(value) ? undefined : 'Firebase project ID should only contain lowercase letters, numbers, and hyphens'
  };
}

// Validate port number
function isValidPort(value: string): ValidationResult {
  const port = parseInt(value, 10);
  const isValid = !isNaN(port) && port >= 1 && port <= 65535;
  return {
    isValid,
    error: isValid ? undefined : 'Port must be a number between 1 and 65535'
  };
}

// Validate base64 format (for private keys)
function isValidBase64(value: string): ValidationResult {
  try {
    const decoded = Buffer.from(value, 'base64').toString('base64');
    return {
      isValid: decoded === value,
      error: decoded === value ? undefined : 'Invalid base64 format'
    };
  } catch {
    return { isValid: false, error: 'Invalid base64 format' };
  }
}

// Environment variable validation rules
const validationRules: Record<string, (value: string) => ValidationResult> = {
  VITE_API_URL: isValidUrl,
  VITE_FIREBASE_API_KEY: isValidFirebaseApiKey,
  VITE_FIREBASE_AUTH_DOMAIN: isValidUrl,
  VITE_FIREBASE_PROJECT_ID: isValidFirebaseProjectId,
  VITE_FIREBASE_STORAGE_BUCKET: (value) => isValidUrl(`https://${value}`),
  VITE_CALENDAR_API_URL: isValidUrl,
  VITE_CALENDAR_API_KEY: isValidFirebaseApiKey,
  EMAIL_USER: isValidEmail,
  PORT: isValidPort,
  GOOGLE_SERVICE_ACCOUNT_EMAIL: isValidEmail,
  GOOGLE_PRIVATE_KEY: isValidBase64
};

export function validateEnvironmentVariable(name: string, value: string): ValidationResult {
  // If there's no specific validation rule, consider it valid
  if (!validationRules[name]) {
    return { isValid: true };
  }

  return validationRules[name](value);
}

export function validateAllEnvironmentVariables(env: Record<string, string>): ValidationResult[] {
  const results: ValidationResult[] = [];
  
  for (const [name, value] of Object.entries(env)) {
    if (validationRules[name]) {
      const result = validateEnvironmentVariable(name, value);
      if (!result.isValid) {
        results.push({
          isValid: false,
          error: `${name}: ${result.error}`
        });
      }
    }
  }
  
  return results;
}

// Validate environment variables at server startup
export function validateEnv(): void {
  const missingVars: string[] = [];
  const invalidVars: ValidationResult[] = [];

  const requiredVars = [
    'PORT',
    'NODE_ENV',
    'EMAIL_USER',
    'EMAIL_PASSWORD',
    'GOOGLE_CALENDAR_ID',
    'GOOGLE_SERVICE_ACCOUNT_EMAIL',
    'GOOGLE_PRIVATE_KEY'
  ];

  // Check for missing variables
  requiredVars.forEach(varName => {
    if (!process.env[varName]) {
      missingVars.push(varName);
    }
  });

  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }

  // Filter out undefined values and create a Record<string, string>
  const envVars = Object.fromEntries(
    Object.entries(process.env)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => [key, value as string])
  );

  const validationResults = validateAllEnvironmentVariables(envVars);

  if (validationResults.length > 0) {
    throw new Error(`Invalid environment variables:\n${validationResults.map(r => r.error).join('\n')}`);
  }
}