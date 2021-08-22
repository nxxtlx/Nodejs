const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/hoc-ve-nodejs',newsController.detail);
router.use('/',newsController.index);



module.exports=router;