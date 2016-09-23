'use strict';

const piexif = require('piexifjs');
const fs = require('fs');
const path = require('path');

module.exports = {
  listAllJpegFiles: function (rootPath) {
    return fs.readdirSync(rootPath).filter(name => path.extname(name).toLowerCase() === ".jpg"); // TODO: Is toLowercase needed?
  },

  getExifDataFromFile: function (filePath) {
    const jpegData = fs.readFileSync(filePath).toString("binary");
    return piexif.load(jpegData);
  },

  getGeoDataFromExif: function (exif) {

  }
};