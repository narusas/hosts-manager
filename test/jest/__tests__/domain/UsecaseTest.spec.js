import SystemHosts from '../../../../src/domain/SystemHosts.js';

describe('System Hosts ', () => {
  it('현재 시스템 의 hosts 내용을 읽어 온다.', () => {
    expect(SystemHosts.loadSystemHosts().includes('127.0.0.1')).toBe(true);
  });

  it('시스템 hosts의 내용을 변경한다. ', () => {
    SystemHosts.saveSystemHosts('127.0.0.1 localhost');
    expect(SystemHosts.loadSystemHosts().includes('127.0.0.1 localhost')).toBe(true);
  });
});
