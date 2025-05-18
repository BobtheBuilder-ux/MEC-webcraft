// Empty implementation of the os module for browser environments
export const EOL = '\n';
export const platform = () => 'browser';
export const homedir = () => '/home/user';
export const tmpdir = () => '/tmp';
export const hostname = () => 'browser-host';
export const userInfo = () => ({
  uid: -1,
  gid: -1,
  username: 'browser-user',
  homedir: '/home/user',
  shell: null
});
export const cpus = () => [];
export const totalmem = () => 0;
export const freemem = () => 0;
export const uptime = () => 0;
export const type = () => 'Browser';
export const release = () => '1.0.0';
export const networkInterfaces = () => ({});

export default {
  EOL,
  platform,
  homedir,
  tmpdir,
  hostname,
  userInfo,
  cpus,
  totalmem,
  freemem,
  uptime,
  type,
  release,
  networkInterfaces
}; 