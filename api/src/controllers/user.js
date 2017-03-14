import {
  ChatService,
  UserService
} from '../services';
import { ResponseHelper } from '../helpers';

export const UserController = {
  getUsers (req, res, next) {
    UserService.getUsers((err, users) => {
      if (err) {
        ResponseHelper.serverError(res, err);
        return next();
      }
      ChatService.getConversations(req.user._id, (err, conversations) => {
        if (err) ResponseHelper.serverError(res, err);
        else ResponseHelper.success(res, { userId: req.user._id, conversations, users });
      });
    });
  },

  getBookmarks (req, res) {
    ResponseHelper.success(res, req.user.bookmarks);
  },

  addBookmark (req, res) {
    let link = req.body.link;
    let description = req.body.description;
    let tags = req.body.tags;

    UserService.addBookmark(req.user, { link, description, tags }, (err) => {
      if (err) ResponseHelper.serverError(res, err);
      else ResponseHelper.created(res, null);
    });
  },

  editBookmark (req, res) {
    let bookmarkId = req.params.bookmarkId;
    let link = req.body.link;
    let description = req.body.description;
    let tags = req.body.tags;

    UserService.editBookmark(req.user, bookmarkId, { link, description, tags }, (err) => {
      if (err) ResponseHelper.serverError(res, err);
      else ResponseHelper.success(res, null);
    });
  },

  deleteBookmark (req, res) {
    let bookmarkId = req.params.bookmarkId;

    UserService.deleteBookmark(req.user, bookmarkId, (err) => {
      if (err) ResponseHelper.serverError(res, err);
      else ResponseHelper.success(res, null);
    });
  }
};
