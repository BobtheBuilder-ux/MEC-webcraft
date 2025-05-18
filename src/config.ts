const isProd = import.meta.env.MODE === 'production';

export const API_URL = isProd 
  ? 'https://mecwebcraft.com/api' // Production API URL for Hostinger
  : 'http://localhost:3001';