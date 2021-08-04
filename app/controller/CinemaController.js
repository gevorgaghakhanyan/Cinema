const db = require('../db');
const BaseController = require('./BaseController');
const {Op} = require("sequelize");

class CinemaController extends BaseController {
  constructor(args) {
    super(args);
  }

  show = async (req, res) => {
    try {
      const cinema = await db.Cinema.findAll();
      return this.sendSuccess(res, cinema, 'SUCCESS');
    } catch (error) {
      return this.sendError(res, error);
    }
  }

  showMovies = async (req, res) => {
    let filter = {deleted_at: null};
    if (req?.query?.startAt){
      filter.start_at = { [Op.gte]: req.query.startAt };
    }
    if (req?.query?.endAt){
      filter.end_at = { [Op.lte]: req.query.endAt };
    }
    try {
      const cinema = await db.Cinema.findAll({
        where:{
          id: req.params.cinemaId,
        },
        include: [{
          model: db.Movie,
          as: 'movies',
          where: filter,
          paranoid: false
        }]
      });
      return this.sendSuccess(res, cinema, "SUCCESS");
    } catch (error) {
      return this.sendError(res, error);
    }
  }

  showAvailableSeats = async (req, res) => {
    try {
      const cinema = await db.Cinema.findAll({
        where:{
          id: req.params.cinemaId,
        },
        include: [{
          model: db.Movie,
          as: 'movies',
          where: {
            deleted_at: null,
            id: req.params.movieId
          },
          paranoid: false,
          include: [{
            model: db.Seat,
            as: 'seats',
            where: {
              user_id: null,
            },
            paranoid: false
          }]
        }]
      });
      return this.sendSuccess(res, cinema, 'SUCCESS');
    } catch (error) {
      return this.sendError(res, error);
    }
  }

  showById = async (req, res) => {
    try {
      const cinema = await db.Cinema.findAll({
        where: {
          id: req.params.cinemaId
        }
      });
      return this.sendSuccess(res, cinema, 'SUCCESS');
    } catch (error) {
      return this.sendError(res, error);
    }
  }
}

module.exports = new CinemaController();
