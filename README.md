pixabay
=======

[![API Testing](https://img.shields.io/badge/API%20Test-RapidAPI-blue.svg)](https://rapidapi.com/package/Pixabay?utm_source=PixabayGithub&utm_medium=button&utm_content=Vender_GitHub)

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
