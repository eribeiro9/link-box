import {
  User
} from '../models';

export const UserService = {
  getUsers(callback) {
    return User
      .find()
      .select('_id username')
      .exec(callback);
  },

  findById(userId, callback) {
    return User.findById(userId, callback);
  },

  findByUsername(username, callback) {
    return User.findOne({ username: username }, callback);
  },

  newUser(username, password, email, callback) {
    return new User({
      username: username,
      email: email || null,
      password: password,
      bookmarks: []
    }).save(callback);
  },

  addBookmark(user, bookmark, callback) {
    user.bookmarks.push(bookmark);
    return user.save(callback);
  },

  editBookmark(user, bookmarkId, newBookmark, callback) {
    for (let bookmark of user.bookmarks) {
      if (bookmark._id === bookmarkId) {
        bookmark = newBookmark;
        break;
      }
    }
    return user.save(callback);
  },

  deleteBookmark(user, bookmarkId, callback) {
    user.bookmarks = user.bookmarks.filter(b => b._id !== bookmarkId);
    return user.save(callback);
  }
};
