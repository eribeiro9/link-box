import request from 'request';

import { CONFIG } from '../../config/main';

export const UserController = {
  remove(req, res) {
    request.delete({
      url: CONFIG.BASE_API_URL + '/users/${req.body.username}'
    }, (error, response, body) => {
      res.status(200).json({
        error: error,
        response: response,
        body: body
      });
    });
  }
};
