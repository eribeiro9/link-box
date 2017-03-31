import {
  AuthenticationAPI,
  UserAPI
} from '../../apis';

describe('Register API', () => {
  let authAPI, userAPI;

  beforeEach(() => {
    authAPI = new AuthenticationAPI();
    userAPI = new UserAPI();
  });

  it('Requires username', () => {
    authAPI.register(null, null).then(res => {
      expect(res.response.statusCode).toBe(400);
      expect(res.response.body.error).toBe('You must enter a username.');
    });
  });

  it('Requires password', () => {
    authAPI.register('test1', null).then(res => {
      expect(res.response.statusCode).toBe(400);
      expect(res.response.body.error).toBe('You must enter a password.');
    });
  });

  it('Prevents username duplication', () => {
    authAPI.register('test1', 'test').then(res => {
      expect(res.response.statusCode).toBe(400);
      expect(res.response.body.error).toBe('That username is already in use.');
    });
  });

  it('Registers successfully', () => {
    authAPI.register('testy', 'test').then(res => {
      expect(res.response.statusCode).toBe(201);
      expect(res.response.body.user).toBeTruthy();
      expect(res.response.body.token).toContain('JWT ');

      userAPI.remove('testy');
    });
  });
});
