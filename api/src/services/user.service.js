import {
  User
} from '../models';

export const UserService = {
  getUsers(callback) {
    return User
      .find()
      .select('_id username')
      .exec(callback);
  }
};
