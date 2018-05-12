let express = require('express');
let router = express.Router();

/* GET Profile Page. */
router.get('/', function(req, res, next) {
    res.send('Profile Page');
});

module.exports = router;