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

  xit('Logs in successfully');
});
