import request from 'request';

import { CONFIG } from '../../config/main';

export const AuthenticationController = {
  login(req, res) {
    request.post({
      url: CONFIG.BASE_API_URL + '/auth/login',
      json: true,
      body: {
        username: req.body.username,
        password: req.body.password
      }
    }, (error, response, body) => {
      res.status(200).json({
        error: error,
        response: response,
        body: body
      });
    });
  }
};
