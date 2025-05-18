// Enhanced mock implementation of AsyncLocalStorage for browser environments
export class AsyncLocalStorage<T = any> {
  private static instance: AsyncLocalStorage<any> | null = null;
  private currentStore: T | undefined = undefined;
  
  constructor() {
    if (AsyncLocalStorage.instance) {
      return AsyncLocalStorage.instance as AsyncLocalStorage<T>;
    }
    AsyncLocalStorage.instance = this;
  }

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

// Export as both named and default
export default {
  AsyncLocalStorage
}; 