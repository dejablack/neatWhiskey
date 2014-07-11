

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
            TweenMax.fromTo("#aboutText", 1, {css:{letterSpacing: '125px'}}, {css:{letterSpacing: '0px', alpha: ".8"}}),
            TweenMax.to("#blueOverlayPX1", 1, {css:{transform:"translateX(0%)", ease:Sine.easeInOut}}),
            TweenMax.to("#greenOverlayPX1", 1, {css:{transform:"translateX(0%)", ease:Sine.easeInOut}})
        ]);

    // build scene
    var scene = new ScrollScene({triggerElement: "#parallaxPX1", duration: ($(window).innerHeight()-300), offset: -400})
                    .setTween(tween)
                    .triggerHook("onCenter")
                    .addTo(controller);

    // show indicators (requires debug extension)
    // scene.addIndicators();
});

//paralax2
$(document).ready(function($) {
    // build tween
    var tween = new TimelineMax ()
        .add([
            TweenMax.fromTo(".leftPX2", 1, {left: "100%", alpha: "1"}, {left: "-30%",  alpha: ".6", ease: Linear.easeNone}),
            TweenMax.fromTo(".rightPX2", 1, {right: "100%", alpha: "1"}, {left: "30%", alpha: ".6", ease: Linear.easeNone}),
            TweenMax.to("#parallaxBGPX2", 1, {backgroundPosition: "0% -0%", ease:Sine.easeInOut})
        ]);

    // build scene
    var scene = new ScrollScene({triggerElement: "#parallaxPX2", duration: $(window).innerHeight(), offset: -400})
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
            TweenMax.to("#cloudsPX3Bottom", 1,  {css:{transform:"translateX(0%)", ease:Sine.easeInOut}}),
           // TweenMax.fromTo("#cloudsPX3Top", 1,  {css:{marginLeft:"-3000px"}}, {css:{marginLeft:"-2000px"}})
        ]);

    // build scene
    var scene = new ScrollScene({triggerElement: "#parallaxPX3", duration: $(window).innerHeight(), offset: -400})
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