let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //     res.send('/login');
    res.send('Login Page');
});

module.exports = router;