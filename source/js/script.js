var navMain = document.querySelector('.main-nav');
var userNav = document.querySelector('.user-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var popup = document.querySelector('.modal');
var overlay = document.querySelector('.modal-overlay');
var articles = document.querySelectorAll('.articles__cart');
var link = document.querySelector('.product-week__toggle');


navMain.classList.remove('main-nav--nojs');
userNav.classList.remove('user-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    userNav.classList.remove('user-nav--closed');
    userNav.classList.add('user-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    userNav.classList.add('user-nav--closed');
    userNav.classList.remove('user-nav--opened');
  }
});


if(articles) {
  for (var i = 0; i < articles.length; i++) {
    articles[i].addEventListener("click", function (event) {
      event.preventDefault();
      popup.classList.add('modal-show');
      overlay.classList.add('modal-show');
    });
  }
}

if(link) {
  link.addEventListener('click', function() {
    popup.classList.add('modal-show');
    overlay.classList.add('modal-show');
  });
}

if(overlay) {
  overlay.addEventListener('click', function() {
    popup.classList.remove('modal-show');
    overlay.classList.remove('modal-show');
  });
}

