const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const { DiveSpot, Review, User } = db;

router.post( //review creation
    "/new",
    asyncHandler(async (req, res) => {
      try {
        await Review.create({
          spotId: req.body.spotId,
          userId: req.body.userId,
          content: req.body.content,
        });
      } catch (e) {
        res.redirect("/login"); //god knows why this would error but here's some handling
      }
  
      let spot = await DiveSpot.findByPk(req.body.spotId, {include: [Review, User],});
      res.json(spot);
    })
  );

  router.put( //review editing
    "/edit/:id",
    asyncHandler(async (req, res) => {
        let review = await Review.findByPk(req.params.id, {include: DiveSpot});
        review.update(req.body)
        let spot = await DiveSpot.findByPk(review.diveId)
        res.json(spot);
    })
  );

  module.exports = router;