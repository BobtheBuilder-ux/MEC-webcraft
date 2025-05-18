"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnvironmentVariable = validateEnvironmentVariable;
exports.validateAllEnvironmentVariables = validateAllEnvironmentVariables;
exports.validateEnv = validateEnv;
const buffer_1 = require("buffer");
// Validate URL format
function isValidUrl(value) {
    try {
        new URL(value);
        return { isValid: true };
    }
    catch {
        return { isValid: false, error: 'Invalid URL format' };
    }
}
// Validate email format
function isValidEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return {
        isValid: emailRegex.test(value),
        error: emailRegex.test(value) ? undefined : 'Invalid email format'
    };
}
// Validate Firebase API key format
function isValidFirebaseApiKey(value) {
    const firebaseKeyRegex = /^AIza[0-9A-Za-z-_]{35}$/;
    return {
        isValid: firebaseKeyRegex.test(value),
        error: firebaseKeyRegex.test(value) ? undefined : 'Invalid Firebase API key format'
    };
}
// Validate Firebase Project ID format
function isValidFirebaseProjectId(value) {
    const projectIdRegex = /^[a-z0-9-]+$/;
    return {
        isValid: projectIdRegex.test(value),
        error: projectIdRegex.test(value) ? undefined : 'Firebase project ID should only contain lowercase letters, numbers, and hyphens'
    };
}
// Validate port number
function isValidPort(value) {
    const port = parseInt(value, 10);
    const isValid = !isNaN(port) && port >= 1 && port <= 65535;
    return {
        isValid,
        error: isValid ? undefined : 'Port must be a number between 1 and 65535'
    };
}
// Validate base64 format (for private keys)
function isValidBase64(value) {
    try {
        const decoded = buffer_1.Buffer.from(value, 'base64').toString('base64');
        return {
            isValid: decoded === value,
            error: decoded === value ? undefined : 'Invalid base64 format'
        };
    }
    catch {
        return { isValid: false, error: 'Invalid base64 format' };
    }
}
// Environment variable validation rules
const validationRules = {
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
function validateEnvironmentVariable(name, value) {
    // If there's no specific validation rule, consider it valid
    if (!validationRules[name]) {
        return { isValid: true };
    }
    return validationRules[name](value);
}
function validateAllEnvironmentVariables(env) {
    const results = [];
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
function validateEnv() {
    const missingVars = [];
    const invalidVars = [];
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
    // Validate formats of present variables
    const envVars = { ...process.env };
    const validationResults = validateAllEnvironmentVariables(envVars);
    if (validationResults.length > 0) {
        throw new Error(`Invalid environment variables:\n${validationResults.map(r => r.error).join('\n')}`);
    }
}
