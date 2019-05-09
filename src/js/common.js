// header mobile menu 

(function(){
  var ul=$("#navs"),li=$("#navs li"),i=li.length,n=i-1,r=180, l=90;
  ul.click(function(){
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
      for(var a=0;a<i;a++){
        li.eq(a).css({
          'transition-delay':""+(50*a)+"ms",
          '-webkit-transition-delay':""+(50*a)+"ms",
          'left':(-r*Math.cos(90/n*a*(Math.PI/180))),
          'top':(l*Math.sin(90/n*a*(Math.PI/180)))  
        });
      }
    }else{
      li.removeAttr('style');
    }
  });
})($);

//connected library selectize

$('select').selectize({
});

//slick
// $(document).ready(function(){
//   $('.good-cart-carousel').slick({
//     slidesToShow: 4,
//     slidesToScroll: 4,  
//     dots: true,
//     infinite: false,
//     speed: 300,
//   });
// });

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
responsiveOwl('.on', owl); 





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
responsiveOwl('.on', $('.package-view-carousel')); 


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
    $('.window-menu-sidebar').toggleClass('is-opened');
    $('.window-menu-content').toggleClass('is-small-width');

  });

  $('.on').on('click', function() {
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
responsiveOwl('.on', $('.cart-gallery-carousel')); 



function placeToCenter () {

const thumbOwlItemActive = document.querySelector('.owl-thumb-item.active'); 
const parent = document.querySelector('.owl-thumbs'); 
  
}
