const db = require('../db');
const BaseController = require('./BaseController');
const {Op} = require("sequelize");

class SeatController extends BaseController {
  constructor(args) {
    super(args);
  }

  showReserves = async (req, res) => {
    let filter = {deleted_at: null};
    if (req?.query?.startAt){
      filter.start_at = { [Op.gte]: req.query.startAt };
    }
    if (req?.query?.endAt){
      filter.end_at = { [Op.lte]: req.query.endAt };
    }
    try {
      const movies = await db.Movie.findOne({
        where: filter,
        include: [{
          model: db.Seat,
          as: 'seats',
          where: {user_id: {[Op.ne]: null}},
          paranoid: false
        }]
      });
      return this.sendSuccess(res, movies, "SUCCESS");
    } catch (error) {
      return this.sendError(res, error);
    }
  }
}

module.exports = new SeatController();
