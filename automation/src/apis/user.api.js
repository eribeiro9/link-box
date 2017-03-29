import { API } from './api';

export class UserAPI extends API {
  constructor() {
    super('/users');
  }

  remove(username) {
    return this.callNodeServer('/remove', {
      username: username
    });
  }
}
