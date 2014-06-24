$(function(){
                				
	var $bars = $(".bar");
				
	for( var i = 0; i< $bars.length; i++ ){					
	  animateBar( $bars.eq(i).css("left", 1 + parseInt(30*i) + "px") );			
	}
				
function animateBar(_bar){
	TweenLite.to( _bar, getRandomInt(40, 50)/100, { 
		//uncomment to add colors
    backgroundColor: "#"+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6), 
		//uncomment to add alpha tween
alpha: getRandomInt(25, 100)/100, 
		height: getRandomInt(115,180), 
		onComplete: animateBar, 
		onCompleteParams:[_bar] 
	});
}
				
	function getRandomInt (min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}
  

								
});


jQuery(".title").fitText(.3, { minFontSize: '20px', maxFontSize: '280px' })
