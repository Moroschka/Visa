var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var mapYandex = document.querySelector(".map__yandex");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

var map = document.getElementById("map");
var myMap;
var myPlacemark;

if (map) {
  mapYandex.classList.remove("map__yandex--nojs");

  ymaps.ready(init);
  function init () {
    myMap = new ymaps.Map(map, {
      center: [55.753722, 37.603675],
      zoom: 15
    });

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Нижний Кисловский переулок, д.7, строение 1, офис 219',
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-ico.png',
      iconImageSize: [80, 140],
      iconImageOffset: [-5, -38]
    }),

    myMap.geoObjects.add(myPlacemark);
  }
}

var link = document.querySelector(".call-order__link");
var feedback = document.querySelector(".call-order__back-call");
var close = feedback.querySelector(".back-call__cross");

  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedback.classList.add("modal-show");
  });

  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    feedback.classList.remove("modal-show");
  });

var carousel = document.getElementById("carousel");

if (carousel) {
  var width = 130;
  var count = 1;

  var carousel = document.getElementById('carousel');
  var list = carousel.querySelector('ul');
  var listElems = carousel.querySelectorAll('li');

  var position = 0;

  carousel.querySelector('.carousel__arrow--prev').onclick = function() {
    position = Math.min(position + width * count, 0)
    list.style.marginLeft = position + 'px';
  };

  carousel.querySelector('.carousel__arrow--next').onclick = function() {
    position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
  };
}

var tel = document.getElementById("tel");

if (tel) {
  window.addEventListener("DOMContentLoaded", function() {
    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select()
        }
    }
    function mask(event) {
        var matrix = "+7 (___) ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
        if (event.type == "blur") {
            if (this.value.length == 2) this.value = ""
        } else setCursorPosition(this.value.length, this)
    };
        var input = document.querySelector("#tel");
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
    });
}

var backCall = document.querySelector(".back-call");

if (backCall) {
$('[type="button"]').click(function() {
  $.post(
  "http://www.visatoptravel.ru/submit.php",
  {
    email: $('[name="email"]').val(),
    name: $('[name="name"]').val(),
    phone: $('[name="phone"]').val()
  },

  function( data ) {
    $( ".result" ).html(data);
  }
  );
});
}
