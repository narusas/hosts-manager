import fs from 'fs';

const fsPromises = fs.promises;

class NeedPermissionError extends Error {
  constructor (nested) {
    super('Need Permission to write System Hosts File');
    this.nested = nested;
  }
}

const UNIX_HOSTS_FILE_LOCATION = '/etc/hosts';
const UnixSystemHosts = {

  async loadSystemHosts () {
    return await fsPromises.readFile(UNIX_HOSTS_FILE_LOCATION, 'utf8');
  },
  async saveSystemHosts (newHostsContents) {
    try {
      await fsPromises.writeFile(UNIX_HOSTS_FILE_LOCATION, newHostsContents, { encoding: 'utf8' });
    } catch (err) {
      console.error(err);
      if (err.code === 'EACCES') {
        throw new NeedPermissionError(err);
      }
      throw err;
    }
  },
  async fixPermission () {
    await fsPromises.chmod(UNIX_HOSTS_FILE_LOCATION, 0o775);
  }
};

const WindowsSystemHosts = {
  loadSystemHosts () {
    return fs.readFileSync('/etc/hosts', 'utf8');
  },
  saveSystemHosts (newHostsContents) {
    fs.writeFileSync('/etc/hosts', newHostsContents);
  }
};

const SystemHosts = process.platform === 'win32' ? WindowsSystemHosts : UnixSystemHosts;
export default SystemHosts;
