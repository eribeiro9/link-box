import {
  AuthenticationAPI
} from '../../apis';

describe('Login API', () => {
  let authAPI;

  beforeEach(() => {
    authAPI = new AuthenticationAPI();
  });

  it('Requires username', () => {
    authAPI.login(null, null).then(res => {
      expect(res.response.statusCode).toBe(400);
      expect(res.response.body).toBe('Bad Request');
    });
  });

  it('Requires password', () => {
    authAPI.login('test1', null).then(res => {
      expect(res.response.statusCode).toBe(400);
      expect(res.response.body).toBe('Bad Request');
    });
  });

  it('Verifies credentials', () => {
    authAPI.login('test1', 'test').then(res => {
      expect(res.response.statusCode).toBe(401);
      expect(res.response.body).toBe('Unauthorized');
    });
  });

  it('Logs in successfully', () => {
    authAPI.login('test1', '123').then(res => {
      expect(res.response.statusCode).toBe(200);
      expect(res.response.body.user).toBeTruthy();
      expect(res.response.body.token).toContain('JWT ');
    });
  });
});
