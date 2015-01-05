pixabay
=======

Simple Pixabay.com API wrapper

[Read docs Pixabay.com here](http://pixabay.com/api/docs/)

Install
=======

> $ bower install pixabay [--save]


Usage
=====

`````
var p = new Pixabay({key: 'XXXXXXXXXXXXXX', username: 'antirek'});
$.ajax({
  url: p.getUrl('sky'),
  success: function (result, status, xhr) {
      console.log(result, status)
  }
});
`````