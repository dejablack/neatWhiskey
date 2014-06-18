// Creativo Pulse

$( '#mTitle' ).hover(
  function() {
    $( this ).addClass( 'animated pulse' );
  }, function() {
    $( this ).removeClass( 'animated pulse' );
  }
);

//Icons

$( '.frendily, .professional, .suitable' ).hover(
  function() {
    $( this ).addClass( 'animated bounce' );
  }, function() {
    $( this ).removeClass( 'animated bounce' );
  }
);


// $( '.visual' ).hasClass('current')
//   function() {
//     $( '.icon-eye' ).addClass( 'animated bounce' );
//   }, function() {
//     $( '.icon-eye' ).removeClass( 'animated bounce' );
//   }
// );

// function:
// (function(){
// if ( $(".visual").hasClass("current") ) {
//   function() {
//     $( '.icon-eye' ).addClass( 'animated bounce' );
//   }, function() {
//     $( '.icon-eye' ).removeClass( 'animated bounce' );
//   }
// };  
// })();

// if ($(".visual").hasClass("current")(
//   function() {
//     $( '.icon-eye' ).addClass( 'animated bounce' );
//   }, function() {
//     $( '.icon-eye' ).removeClass( 'animated bounce' );
//   }
// ));

