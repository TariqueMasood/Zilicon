var navLinks = document.getElementById("navLinks");

function hideMenu() {
  navLinks.style.right = "-230px";
}
function showMenu() {
  navLinks.style.right = "0px";
}

/*----------Owl-Carousel----------*/
$("#owl-carousel-2").owlCarousel({
  loop: true,
  margin: 20,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
      loop: false,
    },
  },
});

wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 40, // default
  mobile: true, // default
  live: true, // default
});
wow.init();
