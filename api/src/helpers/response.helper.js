export const ResponseHelper = {
  success(res, json) {
    return res.status(200).json(json);
  },

  created(res, json) {
    return res.status(201).json(json);
  },

  unauthorized(res) {
    return res.status(401).json({ error: 'You are not authorized to view this content.' });
  },

  badRequest(res, msg) {
    return res.status(422).json({ error: msg });
  },

  serverError(res, msg) {
    return res.status(500).json({ error: msg });
  }
};
