var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  let messsage = 'Hello World';

  res.render('index', { title: 'title', message: messsage });
});

router.get('/workshop', function (req, res, next) {
  res.render('workshop', { title: 'Workshop' });
});

router.get('/galerij', function (req, res, next) {
  res.render('galerij', { title: 'Galerij' });
});

router.get('/test', function (req, res, next) {
  res.render('test', { title: 'Galerij' });
});

module.exports = router;
