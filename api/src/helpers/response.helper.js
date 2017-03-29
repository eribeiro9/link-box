export const ResponseHelper = {
  success(res, json) {
    return res.status(200).json(json);
  },

  created(res, json) {
    return res.status(201).json(json);
  },

  badRequest(res, msg) {
    return res.status(400).json({ error: msg });
  },

  unauthorized(res) {
    return res.status(401).json({ error: 'You are not authorized to view this content.' });
  },

  serverError(res, msg) {
    return res.status(500).json({ error: msg });
  }
};
