'use strict';

var pixabay = function (options) {

  var settings = {
    base: 'http://pixabay.com/api/?',
    key: null,
    username: null
  };  

  var init = function(options){
    if (!options['username'] && !options['key']) throw new Error('No user or key!');
    settings['username'] = options['username'];
    settings['key'] = options['key'];
  };

  init(options);

  var getImages = function (text, options) {
    var q = {
      key: settings['key'],
      username: settings['username'],
      q: text
    },
    t = [], key;

    for(key in q){
      t.push(key + '=' + q[key]);
    }

    var url = settings['base'] + t.join('&'); 
    return url;
  };

  return {
    getImages: getImages
  }
}

module.exports = pixabay;