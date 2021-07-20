const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const { DiveSpot, Review, User } = db;

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


module.exports = router