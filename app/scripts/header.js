
///////////////////////////
//Init Scroll Controller //
//Scrolling Magic        //
///////////////////////////

var controller;
$(document).ready(function($) {
    // init controller
    controller = new ScrollMagic();
});







$(document).ready(function($) {

    // build tween
    var tween = new TimelineMax ()
        .add([
            TweenMax.to("#header", 1, {css:{className:'+=headerSwitch'}})
        ]);

    // build scene
    var scene = new ScrollScene({triggerElement: "#parallaxPX1", duration: 10, offset: 200})
                    .setTween(tween)
                    .triggerHook("onCenter")
                    .addTo(controller);

    // show indicators (requires debug extension)
    scene.addIndicators();
    //
});
