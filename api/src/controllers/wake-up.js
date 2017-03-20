import { ResponseHelper } from '../helpers';

export const WakeUpController = {
  wakeUp (req, res) {
    ResponseHelper.success(res, null);
  }
};
