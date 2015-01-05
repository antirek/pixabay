
var Pixabay = require('../pixabay');


var p = new Pixabay({key: '1234', username: 'vb'});
console.log('url', p.getUrl('sky'));