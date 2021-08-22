const express = require('express');
const router = express.Router();

const indexController = require('../app/controllers/IndexController');

router.use('/search',indexController.search);
router.use('/',indexController.index);




module.exports=router;