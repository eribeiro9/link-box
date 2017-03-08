import { API } from './api';

export class LoginAPI extends API {
  login(username, password) {
    return this.callNodeServer('/auth/login', {
      username: username,
      password: password
    });
  }
}
