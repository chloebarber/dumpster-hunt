const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const { DiveSpot, Review, User } = db;


//GET routes
router.get(
    "/",
    asyncHandler(async (req, res) => {
        let spots = await DiveSpot.findAll()
        res.json(spots);
    })
);

router.get(
    "/:id",
    asyncHandler(async (req, res) => {
        let spot = await DiveSpot.findByPk(req.params.id, {include: [Review, User],});
        res.json(spot);
    })
);

router.get(
  "/new",
  asyncHandler(async (req, res) => {
      let spots = await DiveSpot.findAll()
      res.json(spots);
  })
);


//Create / update Spot routes
router.post( //new Spot
    "/",
    asyncHandler(async (req, res) => {
        try {
            await DiveSpot.create({
              title: req.body.title,
              discoveredBy: req.body.discoveredBy,
              description: req.body.description,
              imageUrl: req.body.imageUrl,
            });
          } catch (e) {
            res.redirect("/login"); //god knows why this would error but here's some handling
          }
          let spots = await DiveSpot.findAll()
          res.json(spots);
    })
);

router.put( //update Spot
    "/:id",
    asyncHandler(async (req, res) => {
        let spot = await DiveSpot.findByPk(req.params.id, {include: [Review, User],});
        spot.update(req.body)
        res.json(spot);
    })
);


router.delete( //delete Spot
    "/:id",
    asyncHandler(async (req, res) => {
        let spot = await DiveSpot.findByPk(req.params.id);
        await spot.destroy();
        let spots = await DiveSpot.findAll()
        res.json(spots);
    })
);


module.exports = router