
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

    ///side bar

    $('.menu-sidebar__item.is-active').append('<button class="on-arrow" onclick="closeSidebar()"><i class="fas fa-arrow-left"></i></button>'); 



    function openSidebar() {
         $('.window-menu-sidebar').addClass('sidebar-opened').removeClass('sidebar-closed');
         $('.window-menu-content').addClass('content-small').removeClass('content-full');
    } 

    function closeSidebar() {
        $('.window-menu-sidebar').removeClass('sidebar-opened').addClass('sidebar-closed');
         $('.window-menu-content').addClass('content-full').removeClass('content-small');
      
    }


    //connected library selectize

    $('select').selectize({

    });

// Selectize.defaults.scrollDuration = 3000; 

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
          470: {
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
        responsive: {
          0: {
            items: 1,
          },
          540: {
            items: 2, 
          },
          820: {
            items: 3,
          },  

          1100: {
            items: 4,
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

$(document).ready(function() {

    $('.cart-info-colors__circle').click( function() {
      $('.cart-info-colors__circle').removeClass('is-active'); 
      $(this).addClass('is-active'); 
    }); 

    // let cart = document.querySelector('.cart-info-colors'); 

    // cart.addEventListener('click', (e) => {
    //   let eDiv = e; 
    //   eDiv.className = "cart-info-colors__circle  is-active "; 
    //   console.log("yeah"); 
    // })

});