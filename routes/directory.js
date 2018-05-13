
let express = require('express');
let router = express.Router();

/* GET Directory Page. */
router.get('/', function(req, res, next) {
    res.send('Directory Page');
});

module.exports = router;
