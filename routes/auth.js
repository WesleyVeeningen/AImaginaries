var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    let messsage = 'Hello World';

    res.render('index', { title: 'title', message: messsage });
});

module.exports = router;
