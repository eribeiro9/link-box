import request from 'request';

import { CONFIG } from '../config/main';

export class API {
  constructor(route) {
    this.route = route;
  }

  callNodeServer(call, body, token) {
    return browser.controlFlow().execute(() => {
      let deferred = protractor.promise.defer();

      if (token) body['token'] = token;
      request.post({
        url: CONFIG.BASE_NODE_URL + this.route + call,
        json: true,
        body: body || {}
      }, (err, res, body) => {
        deferred.fulfill(body);
      });

      return deferred.promise;
    });
  }
}
