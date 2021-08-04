const db = require('../db');
const BaseController = require('./BaseController');

class SeatController extends BaseController {
  constructor(args) {
    super(args);
  }

  reserve = async (req, res) => {
    try {
      const seat = await db.Seat.findOne({
        where: {
          id: req.body.id
        }
      });
      if (seat?.user_id){
        return this.sendSuccess(res, {message: "Sorry, but the seat is reserved."}, 'SUCCESS');
      } else if (seat?.id) {
        seat.user_id = req.body.userId;
        await seat.save();
        return this.sendSuccess(res, seat, 'UPDATE');
      }
      return this.sendError(res, '', 'NOT_FOUND')
    } catch (error) {
      return this.sendError(res, error);
    }
  }
}

module.exports = new SeatController();
