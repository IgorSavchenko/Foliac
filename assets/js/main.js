//======================================================
//parallax effect in header
var scene = document.querySelector('.scene');
var parallax = new Parallax(scene);
//======================================================
// Scroll Reveal effects
window.sr = ScrollReveal({ reset: true });
sr.reveal( '.header', { duration: 500 }, 250);
sr.reveal('.header__menu', { container: '#header' , duration: 2000});
sr.reveal('.header__title', { container: '#header' , duration: 1500});
sr.reveal('.header__reference', { container: '#header' , rotate: {x: 180}, duration: 2500});
sr.reveal('.portfolio', { duration: 500 }, 250);
sr.reveal('.filters', { container: '#portfolio' , duration: 1500});
sr.reveal('.portfolio__list', { container: '#portfolio', duration: 1500});
sr.reveal('.about', { duration: 500 , viewOffset: { top: 100, right: 0, bottom: 100, left: 0 }});
// sr.reveal('.about__info', { container: '#about' , duration: 2500});
sr.reveal('.contact', { duration: 500 }, 250);
sr.reveal('.footer', { duration: 500 , viewOffset: { top: 100, right: 0, bottom: 100, left: 0 }});
//======================================================
// using siema slider in about section
let slider = new Siema({
      selector: '.siema',
      duration: 200,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      threshold: 20,
      loop: true
    });
//======================================================
// animation of social links icons on hover using .css animation
$('.footer__social-link').mouseover(function() {
  $(this).addClass('animated tada');
});
$('.footer__social-link').mouseleave(function() {
  $(this).removeClass('animated tada');
});
//======================================================
//"You images done yet or what?"
$( '.portfolio__list' ).imagesLoaded()
  .progress( function( instance, image ) {
    var result = image.isLoaded ? 'loaded' : 'broken';
    console.log( 'image is ' + result + ' for ' + image.img.src );
  })
  .done( function( instance ) {
    console.log( 'all images successfully loaded' );
  })
  .fail( function() {
    console.log( 'all images loaded, at least one is broken' );
  })
//======================================================
// menu navigation status change
$('.header__link').on('click', function() {
  $('.header__link').removeClass('header__link--active');
  $(this).addClass('header__link--active');
})
//======================================================
// using filters menu in portfolio section
$( function() {

  //Initialize Isotope with jQuery when all images are loaded
  let portfolioList = $( '.portfolio__list' );
  portfolioList.imagesLoaded( function() {
    portfolioList.isotope({
      itemSelector: '.portfolio__item',
      layoutMode: 'fitRows'
    });
  });

  // .filters-link elements class change to .filters-link--active
  $( "[data-filter]" ).on( "click" , function(event) {
    event.preventDefault();
    $( "[data-filter]" ).removeClass( "filters-link--active" );
    console.log( this );
    $( this ).addClass( "filters-link--active" );

    //filter elements by data-filter attribute
    let selector = "*";
    if ( $( this ).data( "filter" ) !== "*") {
      selector = "[data-type='" + $( this ).data( "filter" ) + "']";
    }
    // isotope function use
    portfolioList.isotope({ filter: selector });
  });

});
