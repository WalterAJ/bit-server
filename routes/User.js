var express = require('express');
var router = express.Router();
const controller = require('../controller/UserCt')
/* GET users listing. */
router.get('/login', controller.userLogin);
router.post('/signin', controller.userSignin);

module.exports = router;
