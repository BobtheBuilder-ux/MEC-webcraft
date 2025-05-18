// Empty implementation of the util module for browser environments
export const promisify = (fn: Function) => {
  return (...args: any[]) => {
    return new Promise((resolve) => {
      resolve(null);
    });
  };
};

export const inherits = (ctor: any, superCtor: any) => {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
};

export const inspect = (obj: any) => {
  return JSON.stringify(obj);
};

export const format = (format: string, ...args: any[]) => {
  return format.replace(/%[sdjifoO%]/g, (match) => {
    if (match === '%%') return '%';
    if (args.length === 0) return match;
    const arg = args.shift();
    switch (match) {
      case '%s': return String(arg);
      case '%d': return Number(arg).toString();
      case '%j': return JSON.stringify(arg);
      default: return arg;
    }
  });
};

export const types = {
  isDate: (obj: any) => obj instanceof Date,
  isRegExp: (obj: any) => obj instanceof RegExp,
  isArray: Array.isArray,
  isNull: (obj: any) => obj === null,
  isUndefined: (obj: any) => obj === undefined,
  isObject: (obj: any) => typeof obj === 'object' && obj !== null,
  isFunction: (obj: any) => typeof obj === 'function',
  isString: (obj: any) => typeof obj === 'string',
  isNumber: (obj: any) => typeof obj === 'number',
  isBoolean: (obj: any) => typeof obj === 'boolean',
  isBuffer: () => false,
  isArrayBuffer: (obj: any) => obj instanceof ArrayBuffer,
};

export default {
  promisify,
  inherits,
  inspect,
  format,
  types,
  isArray: Array.isArray,
  isDate: types.isDate,
  isRegExp: types.isRegExp,
}; 