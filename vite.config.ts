import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "./", // Ensures assets are loaded correctly on Hostinger
  server: {
    host: "::",
    port: 8080
  },
  build: {
    chunkSizeWarningLimit: 600,
    sourcemap: mode === 'development', // Only enable source maps in development
    minify: 'terser', // Use terser for better minification
    terserOptions: {
      compress: {
        drop_console: mode === 'production', // Remove console logs in production
        drop_debugger: mode === 'production'
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-components': [
            '@/components/ui/button',
            '@/components/ui/form',
            '@/components/ui/input',
            '@/components/ui/toast',
            '@/components/ui/toaster',
            '@/components/ui/tooltip'
          ],
          'page-components': [
            '@/components/Navbar',
            '@/components/LandingHero',
            '@/components/Portfolio',
            '@/components/Contact'
          ],
          'dashboard': [
            '@/components/dashboard/DashboardTabs',
            '@/components/dashboard/ProjectsList',
            '@/components/dashboard/AddProject'
          ]
        }
      }
    }
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    // Plugin to handle Node.js specific modules
    {
      name: 'handle-node-modules',
      resolveId(id: string) {
        // List of Node.js modules that should be stubbed in browser
        const nodeModules = [
          'async_hooks',
          'stream',
          'fs',
          'path',
          'os',
          'crypto',
          'util'
        ];
        
        if (nodeModules.some(mod => id === mod || id.startsWith(`${mod}/`))) {
          return { id: 'virtual-module', external: false };
        }
        return null;
      },
      load(id: string) {
        if (id === 'virtual-module') {
          // Return empty module
          return 'export default {}; export const AsyncLocalStorage = class {};';
        }
        return null;
      }
    } as Plugin,
    // Plugin to specifically handle AsyncLocalStorage issues
    {
      name: 'mock-asynclocalstorage',
      transform(code: string, id: string) {
        // Check if the file is trying to import AsyncLocalStorage
        if (code.includes('AsyncLocalStorage') && 
            (code.includes('import_node_async_hooks.AsyncLocalStorage') || 
             code.includes('async_hooks') || 
             code.includes('@genkit-ai/core'))) {
          
          // Provide a mock implementation
          return code.replace(
            /import {(\s*AsyncLocalStorage\s*)(.*)} from ['"]async_hooks['"]/g,
            `// Mock AsyncLocalStorage for browser
            const AsyncLocalStorage = class {
              constructor() {}
              run(store, fn) { return fn(); }
              getStore() { return undefined; }
            };`
          ).replace(
            /import\s+.*\s+from\s+['"]async_hooks['"]/g,
            `// Mock async_hooks import
            const AsyncLocalStorage = class {
              constructor() {}
              run(store, fn) { return fn(); }
              getStore() { return undefined; }
            };`
          ).replace(
            /const AsyncLocalStorage =\s*import_node_async_hooks.AsyncLocalStorage/g,
            `const AsyncLocalStorage = class {
              constructor() {}
              run(store, fn) { return fn(); }
              getStore() { return undefined; }
            }`
          );
        }
        return null;
      }
    } as Plugin
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Provide empty implementations for Node.js built-ins
      'async_hooks': path.resolve(__dirname, './src/lib/node-stubs/async-hooks.ts'),
      'stream': path.resolve(__dirname, './src/lib/node-stubs/stream.ts'),
      'fs': path.resolve(__dirname, './src/lib/node-stubs/fs.ts'),
      'path': path.resolve(__dirname, './src/lib/node-stubs/path.ts'),
      'os': path.resolve(__dirname, './src/lib/node-stubs/os.ts'),
      'crypto': path.resolve(__dirname, './src/lib/node-stubs/crypto.ts'),
      'util': path.resolve(__dirname, './src/lib/node-stubs/util.ts'),
      // Replace genkit and its related packages with our browser-compatible version
      'genkit': path.resolve(__dirname, './src/lib/genkit-browser.ts'),
      '@genkit-ai/core': path.resolve(__dirname, './src/lib/genkit-browser.ts'),
      '@genkit-ai/ai': path.resolve(__dirname, './src/lib/genkit-browser.ts'),
      '@genkit-ai/googleai': path.resolve(__dirname, './src/lib/genkit-browser.ts'),
    },
  },
  optimizeDeps: {
    exclude: ['genkit', '@genkit-ai/googleai', '@genkit-ai/core', '@genkit-ai/ai'],
  },
}));
