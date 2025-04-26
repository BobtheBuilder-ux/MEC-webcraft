// Minimal implementation of the crypto module for browser environments
export const randomBytes = (size: number) => {
  const bytes = new Uint8Array(size);
  // Use browser's crypto API if available
  if (typeof window !== 'undefined' && window.crypto) {
    window.crypto.getRandomValues(bytes);
  } else {
    // Fallback to Math.random (not cryptographically secure)
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
  }
  return {
    toString: (encoding: string) => {
      if (encoding === 'hex') {
        return Array.from(bytes)
          .map(b => b.toString(16).padStart(2, '0'))
          .join('');
      }
      return String.fromCharCode.apply(null, bytes as any);
    }
  };
};

export const createHash = (algorithm: string) => {
  let data = '';
  return {
    update: (chunk: string) => {
      data += chunk;
      return this;
    },
    digest: () => {
      // Return a constant hash for browser environments
      return 'browser-environment-mock-hash';
    }
  };
};

export const createHmac = (algorithm: string, key: string) => {
  return createHash(algorithm);
};

export default {
  randomBytes,
  createHash,
  createHmac,
  constants: {
    OPENSSL_VERSION_NUMBER: 0
  }
}; 