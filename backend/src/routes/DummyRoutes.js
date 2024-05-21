// const express = require('express');
// const router = express.Router();
// const {PostDataDummy} = require('../controllers/DummyController');

// router.post("/postData",PostDataDummy)


// module.exports=router;
const express = require('express');
const router = express.Router();
const { PostDataDummy, GetDataDummy } = require('../controllers/DummyController');

router.post("/postData", PostDataDummy);
router.get("/getData", GetDataDummy); // Define route for GET request

module.exports = router;

