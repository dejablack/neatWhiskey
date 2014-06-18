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
