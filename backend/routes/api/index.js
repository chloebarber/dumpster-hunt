const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const diveSpotRouter = require('./diveSpot.js');
const reviewRouter = require('./review.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/divespots', diveSpotRouter)

router.use(`/review`, reviewRouter)


module.exports = router;