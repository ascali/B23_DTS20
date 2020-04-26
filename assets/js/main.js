console.log(
  "%cStop!",
  "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
);
console.log(
  "%cDon't go any futher! This is a browser feature intended for developer only.",
  "color: white; font-family:system-ui; font-size:1rem;-webkit-text-stroke: 1px black;font-weight:bold"
);


// handle header
var header = document.querySelector('header');

window.onscroll = function() {
  // page YOffset or scrollY
  if (window.pageYOffset > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// hendle menu responsive 
document.getElementById("burger-menu").addEventListener("click", function(){
  var x = document.getElementById("id-header-right");
  if (x.className === "header-right") {
    x.className += " active";
  } else {
    x.className = "header-right";
  }
});

const transformMenu = (x) => {
  x.classList.toggle("change");
}

// handle scroll to menu using js
/*document.getElementById("menu_home").addEventListener("click", function(){
  document.getElementById("home").scrollIntoView()
});

document.getElementById("menu_projects").addEventListener("click", function(){
  document.getElementById("projects").scrollIntoView();
});

document.getElementById("menu_teams").addEventListener("click", function(){
  document.getElementById("teams").scrollIntoView();
});

document.getElementById("menu_about").addEventListener("click", function(){
  document.getElementById("about").scrollIntoView();
});*/


// handle slider 
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

