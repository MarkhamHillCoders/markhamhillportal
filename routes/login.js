let express = require('express');
let router = express.Router();

/* GET Login Page. */
router.get('/', function(req, res, next) {
    //     res.send('/login');
    res.send('Login Page');
});

module.exports = router;