import {
  UserService
} from '../services';

export function getUsers (req, res) {
  UserService.getUsers().exec((err, users) => {
    if (err) res.json({ error: err });
    else res.status(200).json({ users });
  });
}
