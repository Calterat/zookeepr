const animalRoutes = require('../apiRoutes/animalRoutes')
const router = require('express').Router();

router.use(animalRoutes);

module.exports = router;