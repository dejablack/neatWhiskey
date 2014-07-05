
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
    var scene = new ScrollScene({triggerElement: "#parallaxPX1", duration: 10, offset: 300})
                    .setTween(tween)
                    .triggerHook("onCenter")
                    .addTo(controller);

    // show indicators (requires debug extension)
    //scene.addIndicators();
    //
});


//Mobile

$(document).ready(function($) {

    // build tween
    var tween = new TimelineMax ()
        .add([
            TweenMax.to(".headerMobile", 1, {css:{backgroundColor:'white'}}),
            TweenMax.to("#navSpan1", 1, {css:{backgroundColor:'#316C7E'}}),
            TweenMax.to("#navSpan2", 1, {css:{backgroundColor:'#316C7E'}}),
            TweenMax.to("#navSpan3", 1, {css:{backgroundColor:'#316C7E'}}),
            TweenMax.to("#mobileLogoJPG", 1, {css:{alpha: '0'}}),
            TweenMax.to("#mobileLogoTxt ", 1, {css:{alpha: '1'}}),
        ]);

    // build scene
    var scene = new ScrollScene({triggerElement: "#mobilePX1", duration: 300})
                    .setTween(tween)
                    .triggerHook("onCenter")
                    .addTo(controller);

    // show indicators (requires debug extension)
    //scene.addIndicators();
    //
});
