/**
 * Browser Polyfills for Node.js APIs
 * 
 * This file provides browser-compatible replacements for Node.js APIs
 * that are used by dependencies but not available in the browser.
 */

// Import process stub
import processStub from './node-stubs/process';

// AsyncLocalStorage polyfill
if (typeof window !== 'undefined') {
  // We're in a browser environment
  
  // Add process to the global scope
  (window as any).process = processStub;
  
  // Create a global AsyncLocalStorage polyfill
  class AsyncLocalStorage<T = any> {
    private currentStore: T | undefined = undefined;
    
    run<R>(store: T, callback: (...args: any[]) => R, ...args: any[]): R {
      const previousStore = this.currentStore;
      try {
        this.currentStore = store;
        return callback(...args);
      } finally {
        this.currentStore = previousStore;
      }
    }
  
    getStore(): T | undefined {
      return this.currentStore;
    }
  
    disable(): void {
      // No-op in browser environment
    }
  
    enterWith(store: T): void {
      this.currentStore = store;
    }
  }
  
  // Add to window to make it available globally
  (window as any).AsyncLocalStorage = AsyncLocalStorage;
  
  // Create a mock async_hooks module
  const async_hooks = {
    AsyncLocalStorage
  };
  
  // Make it available globally
  (window as any).async_hooks = async_hooks;
}

export {}; 