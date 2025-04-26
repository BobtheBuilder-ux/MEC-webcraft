// Minimal implementation of the path module for browser environments
export const join = (...parts: string[]): string => {
  return parts.join('/').replace(/\/+/g, '/');
};

export const resolve = (...parts: string[]): string => {
  return join(...parts);
};

export const dirname = (path: string): string => {
  const lastSlash = path.lastIndexOf('/');
  return lastSlash === -1 ? '' : path.substring(0, lastSlash);
};

export const basename = (path: string, ext?: string): string => {
  let base = path.substring(path.lastIndexOf('/') + 1);
  if (ext && base.endsWith(ext)) {
    base = base.substring(0, base.length - ext.length);
  }
  return base;
};

export const extname = (path: string): string => {
  const lastDot = path.lastIndexOf('.');
  const lastSlash = path.lastIndexOf('/');
  return lastDot > lastSlash ? path.substring(lastDot) : '';
};

export const isAbsolute = (path: string): boolean => {
  return path.startsWith('/');
};

export const sep = '/';
export const delimiter = ':';

export default {
  join,
  resolve,
  dirname,
  basename,
  extname,
  isAbsolute,
  sep,
  delimiter,
  normalize: (path: string) => path.replace(/\/+/g, '/'),
  parse: (path: string) => {
    const dir = dirname(path);
    const base = basename(path);
    const ext = extname(path);
    const name = base.substring(0, base.length - ext.length);
    return { root: '', dir, base, ext, name };
  },
  format: ({ dir, base }: { dir?: string; base?: string }) => {
    return join(dir || '', base || '');
  },
  relative: (from: string, to: string) => to,
}; 