// Empty implementation of the fs module for browser environments
export const readFileSync = () => '';
export const readdirSync = () => [];
export const statSync = () => ({
  isDirectory: () => false,
  isFile: () => false
});
export const existsSync = () => false;
export const mkdirSync = () => {};
export const writeFileSync = () => {};
export const unlinkSync = () => {};

// Promise-based versions
export const readFile = () => Promise.resolve('');
export const readdir = () => Promise.resolve([]);
export const stat = () => Promise.resolve({
  isDirectory: () => false,
  isFile: () => false
});
export const exists = () => Promise.resolve(false);
export const mkdir = () => Promise.resolve();
export const writeFile = () => Promise.resolve();
export const unlink = () => Promise.resolve();

export default {
  readFileSync,
  readdirSync,
  statSync,
  existsSync,
  mkdirSync,
  writeFileSync,
  unlinkSync,
  readFile,
  readdir,
  stat,
  exists,
  mkdir,
  writeFile,
  unlink,
  constants: {
    F_OK: 0,
    R_OK: 4,
    W_OK: 2,
    X_OK: 1
  },
  promises: {
    readFile,
    readdir,
    stat,
    mkdir,
    writeFile,
    unlink
  }
}; 