/*jslint devel: true */
/*global $, jQuery, alert*/
/*jslint indent: 2 */


// minden ami ebben a blokkban van az strict mode-ban lesz
// a strict mode egy szigorubb mukodest eredmenyez, tobb esetben
// fog hibat jelezni a bongeszo (es kevesebb lesz a nem vart munkodes)
// read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
(function () {
// strict mode bekapcsolasa:
'use strict';

// console-ra kiirjuk a hello word stringet
console.log("hello world");


// kivalasztunk minden html elemet amin rajta van az image popup class
// es meghivjuk rá a magnific popup fugvenyt
// a fugveny bemeneti parametere egy object
// ami a popup beallitasait tartalmazza
$('.image-popup').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true
  }
});



// minden hidden-image class-al rendelkező elemet elrejtünk
// sima javascriptet használunk ehhez:
[].forEach.call(document.querySelectorAll('.hidden-image'),
  function (el) {
    el.style.display = 'none';
});


// ez ugyanazt csinálja mint a fentebbi kód, csak ez
// a jquery library segítségével:
$('.hidden-image').css('display', 'none');


}()); // end of strict mode
