var express = require('express');
var router = express.Router();
const controller = require('../controller/RecyclerCt')
/* GET users listing. */
router.get('/login', controller.recyclerLogin);
router.post('/signin', controller.recyclerSignin);
router.get('/getAll', controller.recyclerGetAll);
module.exports = router;
