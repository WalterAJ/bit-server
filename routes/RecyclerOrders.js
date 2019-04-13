const express = require('express');
const router = express.Router();
const controller = require('../controller/RecyclerOrderCt')

router.post('/unchecked', controller.getUncheckedOrders)
router.post('/complete', controller.completeOrder)
router.post('/current', controller.getCurrentOrders)
router.post('/change/current', controller.changeCurrentOrders)
router.post('/get/complete', controller.getCompleteOrders)
module.exports = router;
