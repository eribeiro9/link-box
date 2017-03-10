import {
  AuthenticationAPI
} from '../../apis';

describe('Register API', () => {
  let authAPI;

  beforeEach(() => {
    authAPI = new AuthenticationAPI();
  });

  it('Requires username', () => {
    authAPI.register(null, null).then(res => {
      expect(res.response.statusCode).toBe(422);
      expect(res.response.body.error).toBe('You must enter a username.');
    });
  });

  it('Requires password', () => {
    authAPI.register('test1', null).then(res => {
      expect(res.response.statusCode).toBe(422);
      expect(res.response.body.error).toBe('You must enter a password.');
    });
  });

  it('Prevents username duplication', () => {
    authAPI.register('test1', 'test').then(res => {
      expect(res.response.statusCode).toBe(422);
      expect(res.response.body.error).toBe('That username is already in use.');
    });
  });

  xit('Registers successfully');
});
