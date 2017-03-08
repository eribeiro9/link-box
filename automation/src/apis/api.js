import request from 'request';

import { CONFIG } from '../config/main';

export class API {
  callNodeServer(route, body, token) {
    return browser.controlFlow().execute(function() {
      let deferred = protractor.promise.defer();

      if (token) body['token'] = token;
      request.post({
        url: CONFIG.BASE_NODE_URL + route,
        json: true,
        body: body || {}
      }, (err, res, body) => {
        deferred.fulfill(body);
      });

      return deferred.promise;
    });
  }
}
