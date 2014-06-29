


////////////////
//Mobile Menu //
////////////////
$(document).ready(function(){
  $('.js-menu-trigger').on('click touchstart', function(e){
  	$('#hamburger').toggleClass('open');
    $('.js-menu').toggleClass('is-visible');
    $('.js-menu-screen').toggleClass('is-visible');
    e.preventDefault();
  });

  $('.js-menu-screen').on('click touchstart', function(e){
  	$('#hamburger').toggleClass('open');
    $('.js-menu').toggleClass('is-visible');
    $('.js-menu-screen').toggleClass('is-visible');
    e.preventDefault();
  });
});



// $(document).ready(function($) {

//     // build tween
//     var tween = new TimelineMax ()
//         .add([
//             TweenMax.to("#mobileLogo", 1, {css:{className:'+=greenLogo'}})
//         ]);

//     // build scene
//     var scene = new ScrollScene({triggerElement: "#mobilePX1"})
//                     .setTween(tween)
//                     .triggerHook("onCenter")
//                     .addTo(controller);

//     // show indicators (requires debug extension)
//     //scene.addIndicators();
//     //
// });