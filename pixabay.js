'use strict';

(function() {
  
  var Pixabay = function (options) {

    var settings = {
      base: 'http://pixabay.com/api/?',
      key: null,
      username: null
    };  

    var init = function (options) {
      if (!options['username'] && !options['key']) throw new Error('No user or key!');
      settings['username'] = options['username'];
      settings['key'] = options['key'];
    };

    init(options);

    var getUrl = function (text, options) {
      if (!options) options = {};

      var query = {
        key: settings['key'],
        username: settings['username'],
        q: text,
        image_type: options['image_type'] || 'photo',
        orientation: options['orientation'] || 'horizontal',
        per_page: options['per_page'] || 50
      },
      t = [], key;

      for (key in query) {
        t.push(key + '=' + query[key]);
      }

      var url = settings['base'] + t.join('&'); 
      return url;
    };

    var getImages = function (text, options, callback) {
      if (!options) options = {};

      var url = getUrl(text, options);

      $.getJSON(url, function (data, status, xhr) {
        callback(data, status, xhr);
      });
    };

    return {
      getImages: getImages,
      getUrl: getUrl 
    };
  };

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = Pixabay;
  else
    window.Pixabay = Pixabay;
  
})();