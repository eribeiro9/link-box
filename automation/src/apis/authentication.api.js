import { API } from './api';

export class AuthenticationAPI extends API {
  constructor() {
    super('/auth');
  }

  login(username, password) {
    return this.callNodeServer('/login', {
      username: username,
      password: password
    });
  }

  register(username, password, email) {
    return this.callNodeServer('/register', {
      username: username,
      email: email,
      password: password
    });
  }
}
