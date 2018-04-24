let express = require('express');
let router = express.Router();

/* GET Directory page. */
router.get('/', function(req, res, next) {
    res.send('Directory');
});

module.exports = router;