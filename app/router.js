const router = require('express').Router();
const CinemaController = require('./controller/CinemaController');
const SeatController = require('./controller/SeatController');
const MovieController = require('./controller/MovieController');

router.get('/', async (req, res) => {
  return res.json({ status: '✔️' });
});

router.get('/cinemas', CinemaController.show);
router.get('/cinemas/:cinemaId', CinemaController.showById);
router.get('/cinemas/:cinemaId/movies', CinemaController.showMovies);
router.get('/cinemas/:cinemaId/movies/:movieId', CinemaController.showAvailableSeats);
router.get('/movies/reserves', MovieController.showReserves);
router.put('/reserve', SeatController.reserve);

module.exports = router;
