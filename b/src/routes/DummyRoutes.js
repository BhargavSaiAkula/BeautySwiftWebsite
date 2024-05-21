const express = require('express');
const router = express.Router();
const {PostDataDummy} = require('../controllers/DummyController');

router.post("/postData",PostDataDummy)

module.exports=router;