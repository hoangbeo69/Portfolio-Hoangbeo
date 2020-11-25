"use strict";

if ($('.typed').length) {
  var typedString = $('.typed').data('typed-items');
  typedString = typedString.split(',');
  new Typed('.typed', {
    strings: typedString,
    loop: true,
    typeSpeed: 100,
    backDelay: 2000,
    backSpeed: 50
  });
}