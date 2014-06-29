
// X Button

// $('#hamburger').on('click', function() {
//     $(this).toggleClass('open');
// });



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


// $(document).ready(function(){
 
//   $("#hamburger").click(function(){
 
//   if ($(".js-menu").hasClass('is-visible')) {
 
//     $("#hamburger").addClass("open");
 
// } 
 
// else {
 
//     $("#hamburger").removeClass("open");
 
// }  
 
//   });
 
// });


// /**
// * Menu Open/Close Logic
// * Wrapped inside Functions for customizability!
// * Code by: @XerxesNoble
// *
// */


// $(function() {
//     $('.toggle-nav').click(function() {
//        //Menu Open/Close
//         toggleNav();
//         //Do other things on Nav toggle
//     });
// });


// function toggleNav() {
//     if ($('#page-wrapper').hasClass('show-nav')) {
//         // Do other things on close
//         $('#page-wrapper').removeClass('show-nav');
//     } else {
//         // Do other things on open
//         $('#page-wrapper').addClass('show-nav');
//     }
// }

// //Fit Menu height to Page

// function yFit(x,y){
//   $(x).height( $(y).height() );  
// };
// yFit('#np-Nav','#page-wrapper');


// //Swipe Function



// /**
//  * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch and iPad, should also work with Android mobile phones (not tested yet!)
//  * Common usage: wipe images (left and right to show the previous or next image)
//  * 
//  * @author Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
//  * @version 1.1.1 (9th December 2010) - fix bug (older IE's had problems)
//  * @version 1.1 (1st September 2010) - support wipe up and wipe down
//  * @version 1.0 (15th July 2010)
//  */
// (function ($) {
//     $.fn.touchwipe = function (settings) {
//         var config = {
//             min_move_x: 20,
//             min_move_y: 20,
//             wipeLeft: function () {},
//             wipeRight: function () {},
//             wipeUp: function () {},
//             wipeDown: function () {},
//             preventDefaultEvents: true
//         };
//         if (settings) $.extend(config, settings);
//         this.each(function () {
//             var startX;
//             var startY;
//             var isMoving = false;

//             function cancelTouch() {
//                 this.removeEventListener('touchmove', onTouchMove);
//                 startX = null;
//                 isMoving = false
//             }

//             function onTouchMove(e) {
//                 if (config.preventDefaultEvents) {
//                     e.preventDefault()
//                 }
//                 if (isMoving) {
//                     var x = e.touches[0].pageX;
//                     var y = e.touches[0].pageY;
//                     var dx = startX - x;
//                     var dy = startY - y;
//                     if (Math.abs(dx) >= config.min_move_x) {
//                         cancelTouch();
//                         if (dx > 0) {
//                             config.wipeLeft()
//                         } else {
//                             config.wipeRight()
//                         }
//                     } else if (Math.abs(dy) >= config.min_move_y) {
//                         cancelTouch();
//                         if (dy > 0) {
//                             config.wipeDown()
//                         } else {
//                             config.wipeUp()
//                         }
//                     }
//                 }
//             }

//             function onTouchStart(e) {
//                 if (e.touches.length == 1) {
//                     startX = e.touches[0].pageX;
//                     startY = e.touches[0].pageY;
//                     isMoving = true;
//                     this.addEventListener('touchmove', onTouchMove, false)
//                 }
//             }
//             if ('ontouchstart' in document.documentElement) {
//                 this.addEventListener('touchstart', onTouchStart, false)
//             }
//         });
//         return this
//     }
// })(jQuery);



// $(window).touchwipe({
//      wipeLeft: function() { 
//         //alert("Open Sesame!"); 
//         $('#page-wrapper').addClass('show-nav');},
//      wipeRight: function() { 
//         //alert("Close Sesame!");
//         $('#page-wrapper').removeClass('show-nav');},
//      //wipeUp: function() { alert("up"); },
//      //wipeDown: function() { alert("down"); },
//      min_move_x: 20,
//      min_move_y: 20,
//      preventDefaultEvents: false
// });