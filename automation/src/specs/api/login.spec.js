import {
  LoginAPI
} from '../../apis';

describe('Login API', () => {
  let loginAPI;

  beforeEach(() => {
    loginAPI = new LoginAPI();
  });

  it('Requires username', () => {
    loginAPI.login(null, null).then(res => {
      expect(res.response.statusCode).toBe(400);
      expect(res.response.body).toBe('Bad Request');
    });
  });

  it('Requires password', () => {
    loginAPI.login('test1', null).then(res => {
      expect(res.response.statusCode).toBe(400);
      expect(res.response.body).toBe('Bad Request');
    });
  });

  it('Verifies credentials', () => {
    loginAPI.login('test1', 'test').then(res => {
      expect(res.response.statusCode).toBe(401);
      expect(res.response.body).toBe('Unauthorized');
    });
  });

  it('Logs in successfully', () => {
    loginAPI.login('test1', '123').then(res => {
      expect(res.response.statusCode).toBe(200);
      expect(res.response.body.user).toBeTruthy();
      expect(res.response.body.token).toContain('JWT ');
    });
  });
});
