

(function() {
  var qry1;

  $('.dimensions').html('Width: ' + $(window).width() + 'px');

  $(window).resize(function() {
    return $('.dimensions').html('Width: ' + $(this).width() + 'px');
  });

  qry1 = Harvey.attach('screen and (min-width:605px)', {
    setup: function() {
//////////
//About //
//////////


//Process1
$(document).ready(function($) {

var titleContain = (".processTitle"),
    process1 = ("#process1"),
    process2 = ("#process2"),
    tl = new TimelineMax({repeat:0, repeatDelay:1});


    //Set Objects
    TweenMax.set(process1, {css:{transform:"translateX(-250%)", alpha:0}});
    TweenMax.set(process2, {css:{transform:"translateX(250%)", alpha:0}});



    // build tween
    var tween = new TimelineMax ()
        .add([
            //TweenMax.fromTo("#parallax #big", 1, {scale: 2, alpha: 0.3, top: "100%"}, {top: "0%", ease: Linear.easeNone}),
            tl.to(process1, .5, {css:{transform:"translateX(0%)", alpha:1}}),
            tl.to(process2, .5, {css:{transform:"translateX(0%)", alpha:1}}),
        ]);

    // build scene
    var scene = new ScrollScene({triggerElement: titleContain, offset: 250})
                    .setTween(tween)
                    .triggerHook("onCenter")
                    .addTo(controller);

    // show indicators (requires debug extension)
    //scene.addIndicators();
});


//Process2
$(document).ready(function($) {

var process3 = ("#process3"),
    process4 = ("#process4"),
    tl = new TimelineMax({repeat:0, repeatDelay:1});


    TweenMax.set(process3, {css:{transform:"translateX(-250%)", alpha:0}});
    TweenMax.set(process4, {css:{transform:"translateX(250%)", alpha:0}});
    


    // build tween
    var tween = new TimelineMax ()
        .add([
            //TweenMax.fromTo("#parallax #big", 1, {scale: 2, alpha: 0.3, top: "100%"}, {top: "0%", ease: Linear.easeNone}),
            tl.to(process3, .5, {css:{transform:"translateX(0%)", alpha:1}}),
            tl.to(process4, .5, {css:{transform:"translateX(0%)", alpha:1}}),
        ]);

    // build scene
    var scene = new ScrollScene({triggerElement: process1, offset: 250})
                    .setTween(tween)
                    .triggerHook("onCenter")
                    .addTo(controller);

    // show indicators (requires debug extension)
    //scene.addIndicators();
});

//Process3
$(document).ready(function($) {

var process5 = ("#process5");
    tl = new TimelineMax({repeat:0, repeatDelay:1});


    TweenMax.set(process5, {css:{transform:"translateY(250%)", alpha:0}});

    // build tween
    var tween = new TimelineMax ()
        .add([
            tl.to(process5, .5, {css:{transform:"translateY(0%)", alpha:1}}),
        ]);

    // build scene
    var scene = new ScrollScene({triggerElement: process4, offset: 400})
                    .setTween(tween)
                    .triggerHook("onCenter")
                    .addTo(controller);

    // show indicators (requires debug extension)
    //scene.addIndicators();
});


    },
    on: function() {
      return console.log('Mag On', this.condition);
    },
    off: function() {
      return console.log('Mag Of', this.condition);
    }
  });

}).call(this);