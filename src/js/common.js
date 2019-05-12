// header mobile menu 

$('.hamburger').click( function() {
  $(this).toggleClass('is-active');
  $('.logo').toggleClass('is-active');
  $('.mobile-menu').toggleClass('mobile-menu__is-open');
});


$('.menu-trigger').click( function() {
  $(this).toggleClass('is-active');
  $('.logo').toggleClass('is-active');
  $('.mobile-menu').toggleClass('mobile-menu__is-open');
});


$('.menu-sidebar__item.is-active').append('<button class="on-arrow"><i class="fas fa-arrow-left"></i></button>'); 


//connected library selectize

$('select').selectize({
});


//owl carousel apllied



var owl =  $('.good-cart-carousel').owlCarousel({
    loop: true,
    items: 3,
    smartSpeed: 700,
    nav: true,
    responsiveBaseElement: '.good-cart-wrap', 
    navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
    autoHeight: true, 
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      425: {
        items: 2, 
      },
      720: {
        items: 3,
      },  
      
      992: {
        items:  3,
      },
      1100: {
        items: 4,
      }, 
      1600: {
        items: 4
      }
    }
});

responsiveOwl('.window-menu-ham', owl); 
responsiveOwl('.on-arrow', owl); 


$('.window-menu-sidebar').click(function(){ 
  owl.trigger('refresh.owl.carousel');  
});



// $('.on').click(function(){ 
//   setTimeout(
//   function () {
//     owl.trigger('refresh.owl.carousel');  
//   }, 410);
// });


// $('.window-menu-ham').click(function(){ 
//   setTimeout(
//   function () {
//     owl.trigger('refresh.owl.carousel');  
//   }, 410);
// });






function responsiveOwl (trig, carousel) {
  $(trig).click(function(){ 
  setTimeout(
  function () {
    carousel.trigger('refresh.owl.carousel');  
  }, 410);
});
}


$('.package-view-carousel').owlCarousel({
  loop: true,
  items: 1,  
  smartSpeed: 700,
  dots: true, 
  nav: true,
  navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
  autoHeight: true
  });


responsiveOwl('.window-menu-ham', $('.package-view-carousel')); 
responsiveOwl('.on-arrow', $('.package-view-carousel')); 


$('.features-composition-carousel').owlCarousel({
  loop: true,
  items: 1,  
  smartSpeed: 700,
  dots: true, 
  nav: false,
  autoHeight: false
  });

$('.chall-carousel').owlCarousel({
  loop: true,
  items: 1,  
  smartSpeed: 700,
  dots: true, 
  nav: true,
  navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
  autoHeight: true
  });




$('.menu-carousel').owlCarousel({
    loop: true,
    items: 3,
    smartSpeed: 700,
    nav: true,
    navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
    autoHeight: true, 
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      425: {
        items: 2, 
      },
      720: {
        items: 3,
      },  
      
      992: {
        items:  3,
      },
      1100: {
        items: 4,
      }, 
      1600: {
        items: 4
      }
    }
});




// var owl;
// owl = $('.carousel-review').owlCarousel({
//     loop: true,
//     items: 1,
//     smartSpeed: 700,
//     
//     autoHeight: true, 
//     dotsContainer: '#carousel-custom-dots'
//   });

// $('.owl-dot').click(function () {
//   owl.trigger('to.owl.carousel', [$(this).index(), 300]);
// });


// page-menu 

$(function() {
  $('.window-menu-ham').on('click', function() {
    $('.on-arrow').toggleClass('is-active');
    $('.window-menu-sidebar').toggleClass('is-opened');
    $('.window-menu-content').toggleClass('is-small-width');

  });

  $('.on-arrow').on('click', function() {
    $('.on-arrow').removeClass('is-active');
    $('.window-menu-sidebar').removeClass('is-opened');
    $('.window-menu-content').removeClass('is-small-width');
  });

  
});

$('.cart-info-colors').on('click', function(event){
  let circle = event;
  event.toggleClass("is-active"); 

})

$('.cart-gallery-carousel').owlCarousel({
  thumbs: true,
  thumbsPrerendered: true, 
  thumbItemClass: 'owl-thumb-item', 
  thumbContainerClass: 'owl-thumbs',
   loop: true,
   items: 1,  
   smartSpeed: 700,
   dots: true, 
    nav: true,
    navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
    autoHeight: true
  });


responsiveOwl('.window-menu-ham', $('.cart-gallery-carousel')); 
responsiveOwl('.on-arrow', $('.cart-gallery-carousel')); 



function placeToCenter () {

const thumbOwlItemActive = document.querySelector('.owl-thumb-item.active'); 
const parent = document.querySelector('.owl-thumbs'); 
  
}
