const express = require('express');
const router = express.Router();
const controller = require('../controller/AddressCt')

router.get('/all', controller.getAllAddresses)
router.post('/address', controller.addAddress)
module.exports = router;
