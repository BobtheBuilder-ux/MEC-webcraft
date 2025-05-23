import { defineConfig, Plugin, UserConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }): Promise<UserConfig> => {
  const plugins: PluginOption[] = [react()];

  // Add Node.js module handling plugin
  plugins.push({
    name: 'handle-node-modules',
    resolveId(id: string) {
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
        return 'export default {}; export const AsyncLocalStorage = class {};';
      }
      return null;
    }
  } as Plugin);

  // Add AsyncLocalStorage handling plugin
  plugins.push({
    name: 'mock-asynclocalstorage',
    transform(code: string) {
      if (code.includes('AsyncLocalStorage') && 
          (code.includes('import_node_async_hooks.AsyncLocalStorage') || 
           code.includes('async_hooks') || 
           code.includes('@genkit-ai/core'))) {
        
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
  } as Plugin);

  return {
    base: './',
    publicDir: 'public',
    server: {
      host: "localhost",
      port: 8080,
      proxy: {
        '/api': {
          target: process.env.VITE_API_URL || 'http://localhost:5000',
          changeOrigin: true,
          secure: mode === 'production'
        }
      }
    },
    build: {
      chunkSizeWarningLimit: 600,
      sourcemap: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: mode === 'production',
          drop_debugger: mode === 'production',
          pure_funcs: mode === 'production' ? ['console.log', 'console.debug'] : []
        }
      },
      outDir: 'public_html',
      emptyOutDir: true,
      assetsDir: 'assets',
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html')
        },
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'ui-components': [
              '@/components/ui/button',
              '@/components/ui/form',
              '@/components/ui/input',
              '@/components/ui/toast',
              '@/components/ui/toaster',
              '@/components/ui/tooltip',
              '@/components/ui/auth-form'
            ],
            'page-components': [
              '@/components/Navbar',
              '@/components/LandingHero',
              '@/components/Portfolio',
              '@/components/Contact'
            ],
            'auth': [
              '@/pages/Login',
              '@/pages/Register',
              '@/pages/ResetPassword',
              '@/components/ProtectedRoute'
            ],
            'dashboard': [
              '@/pages/Dashboard',
              '@/components/dashboard/DashboardTabs',
              '@/components/dashboard/ProjectsList',
              '@/components/dashboard/AddProject',
              '@/components/dashboard/BlogDashboard',
              '@/components/dashboard/LeadsDashboard'
            ]
          }
        }
      }
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        'async_hooks': path.resolve(__dirname, './src/lib/node-stubs/async-hooks.ts'),
        'stream': path.resolve(__dirname, './src/lib/node-stubs/stream.ts'),
        'fs': path.resolve(__dirname, './src/lib/node-stubs/fs.ts'),
        'path': path.resolve(__dirname, './src/lib/node-stubs/path.ts'),
        'os': path.resolve(__dirname, './src/lib/node-stubs/os.ts'),
        'crypto': path.resolve(__dirname, './src/lib/node-stubs/crypto.ts'),
        'util': path.resolve(__dirname, './src/lib/node-stubs/util.ts'),
        'genkit': path.resolve(__dirname, './src/lib/genkit-browser.ts'),
        '@genkit-ai/core': path.resolve(__dirname, './src/lib/genkit-browser.ts'),
        '@genkit-ai/ai': path.resolve(__dirname, './src/lib/genkit-browser.ts'),
        '@genkit-ai/googleai': path.resolve(__dirname, './src/lib/genkit-browser.ts'),
      },
    },
    optimizeDeps: {
      exclude: ['genkit', '@genkit-ai/googleai', '@genkit-ai/core', '@genkit-ai/ai'],
    },
  };
});
