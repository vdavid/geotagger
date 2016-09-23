var express = require('express');
var router = express.Router();
const JpegLister = require('../app/utilities/jpegLister');

/* GET home page. */
router.get('/', function (req, res, next) {
  const root = 'c:\\Users\\David\\Dropbox\\photos by date - assorted\\2013-07-10 - 2017-xx-xx USA\\2016-08-11 Detroit\\';
  const jpegFileNames = JpegLister.listAllJpegFiles(root);
  const data = JpegLister.getExifDataFromFile(root + jpegFileNames[0]);
  console.log(data);
  res.render('index', {title: 'Express', data: data});
});

module.exports = router;
