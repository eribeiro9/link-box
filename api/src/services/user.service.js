import {
  User
} from '../models';

export const UserService = {
  getUsers() {
    return User
      .find()
      .select('_id username');
  }
};
