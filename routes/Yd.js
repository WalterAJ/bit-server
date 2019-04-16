const express = require('express');
const router = express.Router();
const controller = require('../controller/YdCt')

// router.get('/order', controller.pushOrder)
router.post('/addYd', controller.addYd)
router.post('/buyYd', controller.buyYd)
router.get('/getYd', controller.getYd)
module.exports = router;
