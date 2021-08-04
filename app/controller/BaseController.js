const { HTTP_STATUS } = require('../config/constants');

class BaseController {
    constructor(args) {

    }

    sendSuccess(res, data, status = 'SUCCESS') {
    return res.status(HTTP_STATUS[status]).json({
      data,
      status: HTTP_STATUS[status],
    });
  }

  sendError(res, error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({
        message: 'BAD REQUEST',
        error: {},
        http_code: 400,
      });
    }
    return res.status(500).json({ message: 'FATAL', error: {} });
  }
}

module.exports = BaseController;
