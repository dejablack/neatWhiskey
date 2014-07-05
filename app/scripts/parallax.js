

////////////
//Paralax //
////////////


//Try using px for the background position
//#parallax #parallaxbg double class why?
//  Prbly only need one class which could be fucking it
//  background position check that shit out

//paralax1
$(document).ready(function($) {

    // build tween
    var tween = new TimelineMax ()
        .add([
            TweenMax.fromTo("#parallaxPX1 #big", 1, {scale: 2, alpha: 0.3, top: "100%"}, {top: "0%", ease: Linear.easeNone}),
            TweenMax.to("#parallaxBGPX1", 1, {backgroundPosition: "0% -0%"})
        ]);

    // build scene
    var scene = new ScrollScene({triggerElement: "#parallaxPX1", duration: 1400, offset: -400})
                    .setTween(tween)
                    .triggerHook("onCenter")
                    .addTo(controller);

    // show indicators (requires debug extension)
    //scene.addIndicators();
    //
});


//paralax2
$(document).ready(function($) {
    // build tween
    var tween = new TimelineMax ()
        .add([
            TweenMax.fromTo(".leftPX2", 1, {left: "100%"}, {left: "-5%", ease: Linear.easeNone}),
            TweenMax.fromTo(".rightPX2", 1, {right: "100%"}, {left: "10%", ease: Linear.easeNone}),
            TweenMax.to("#parallaxBGPX2", 1, {backgroundPosition: "0% -0%", ease:Sine.easeInOut})
        ]);

    // build scene
    var scene = new ScrollScene({triggerElement: "#parallaxPX2", duration: 1400, offset: -400})
                    .setTween(tween)
                    .triggerHook("onCenter")
                    .addTo(controller);

    // show indicators (requires debug extension)
    // scene.addIndicators();
});



//paralax3
$(document).ready(function($) {
    // build tween
    var tween = new TimelineMax ()
        .add([
            TweenMax.to("#parallaxBGPX3", 1, {backgroundPosition: "0% -0%", ease:Sine.easeInOut})
        ]);

    // build scene
    var scene = new ScrollScene({triggerElement: "#parallaxPX3", duration: 1400, offset: -400})
                    .setTween(tween)
                    .triggerHook("onCenter")
                    .addTo(controller);

    // show indicators (requires debug extension)
    // scene.addIndicators();
});

$(document).ready(function($) {
    // build tween
    var px3Title = $('#px3Title')
    	splitPx3Title = new SplitText(px3Title, {type:"chars"});
    var tween = new TimelineMax ()
        .add([
        	TweenMax.staggerTo("#px3Title > div", 0.0001, {css:{className:'+=px3Animate'}}, 0.2),
        ]);

    // build scene
    var scene = new ScrollScene({triggerElement: "#parallaxPX3", duration: 700, offset: -400})
                    .setTween(tween)
                    .triggerHook("onCenter")
                    .addTo(controller);

    // show indicators (requires debug extension)
    // scene.addIndicators();
});