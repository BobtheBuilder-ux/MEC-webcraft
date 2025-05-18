// Minimal implementation of Node.js process for browser environments

const process = {
  env: {
    NODE_ENV: import.meta.env.MODE || 'development',
    // Add any other environment variables needed by google-auth-library
  },
  nextTick: (callback: Function, ...args: any[]) => {
    setTimeout(() => callback(...args), 0);
  },
  version: 'v16.0.0', // Mock version
  versions: {
    node: '16.0.0',
  },
  platform: 'browser',
  cwd: () => '/',
  // Add other properties as needed by google-auth-library
};

export default process; 