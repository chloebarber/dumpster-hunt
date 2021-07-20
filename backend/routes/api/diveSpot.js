const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const { DiveSpot, Review, User } = db;


//GET routes
router.get(
    "/",
    asyncHandler(async (req, res) => {
        let spots = await DiveSpot.findAll({limit: 10})
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


//Create / update Spot routes
router.post(
    "/",
    //csrfProtection, //csrf goes here
    asyncHandler(async (req, res) => {
        try {
            await DiveSpot.create({
              title: req.body.title,
              discoveredBy: 1,
              //discoveredBy: req.session.auth.id,
              description: req.body.description,
            });
          } catch (e) {
            res.redirect("/login"); //god knows why this would error but here's some handling
          }
      
          res.redirect(`/diveSpots}`);
    })
);

router.put(
    "/:id",
    asyncHandler(async (req, res) => {
        let spot = await DiveSpot.findByPk(req.params.id, {include: [Review, User],});
        res.json(spot);
    })
);

router.post( //review creation
    "/:id",
    asyncHandler(async (req, res) => {
      try {
        await Review.create({
          spotId: req.params.id,
          userId: 1,
          //userId: req.session.auth.id,
          content: req.body.content,
        });
      } catch (e) {
        res.redirect("/login"); //god knows why this would error but here's some handling
      }
  
      res.redirect(`/diveSpots/${req.params.id}`);
    })
  );



module.exports = router