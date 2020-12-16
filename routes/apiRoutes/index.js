const animalRoutes = require('./animalRoutes');
const router = require('express').Router();

router.use(animalRoutes);
router.use(require('./zookeeperRoutes'));

module.exports = router;