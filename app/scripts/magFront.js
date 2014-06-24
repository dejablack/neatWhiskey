

(function() {
  var qry1;

  $('.dimensions').html('Width: ' + $(window).width() + 'px');

  $(window).resize(function() {
    return $('.dimensions').html('Width: ' + $(this).width() + 'px');
  });

  qry1 = Harvey.attach('screen and (min-width:605px)', {
    setup: function() {

//Var mag first

var quote = document.getElementById("quote"),
    decoy = document.getElementById("decoys"),
    quoteSplit = new SplitText(quote, {type:"words"}),
    decoySplit = new SplitText(decoy, {type:"words"}),
    tl = new TimelineMax({delay:0.5, repeat:0, repeatDelay:1}),
    allWords = quoteSplit.words.concat(decoySplit.words),
    i,
    //secondComming Var
    mTitle = $('.indexTitle'),
    mTitle2 = $('.indexDescription'),
    mTitle3 = $('.indexLocation'),
    splitTitle = new SplitText(mTitle, {type:"chars"}),
    splitTitle2 = new SplitText(mTitle2, {type:"chars"}),
    splitTitle3 = new SplitText(mTitle3, {type:"chars"}),
    //Icons
    iconOne = $('.frendily'),
    iconTwo = $('.professional'),
    iconThree = $('.suitable'),
    //button
    indexBtn = $('.indexBtn');

//Set Start status
TweenMax.set([quote, decoy], {visibility:"visible"});
TweenMax.set(allWords, {boxShadow:"(0px 0px 6px rgba(0, 0, 0, 0.8)"});
TweenMax.set(splitTitle, {visibility:"hidden"});
TweenMax.set(iconOne, {css:{autoAlpha:0, scale:'0'}});
TweenMax.set(iconTwo, {css:{autoAlpha:0, scale:'0'}});
TweenMax.set(iconThree, {css:{autoAlpha:0, scale:'0'}});
//TweenMax.set(smallHeadLogo, {css:{opacity:('0')}});
TweenMax.set(indexBtn, {css:{autoAlpha:0, scale:'0'}});

//intro
for(i = 0; i < allWords.length; i++) {
  tl.fromTo(allWords[i], 0.4 + Math.random() * 0.5, {x:randomInteger(-400, 400), y:randomInteger(-300, 300), autoAlpha:0}, {force3D:true, rotation:randomInteger(-60, 60), y:randomInteger(60, 500), x:randomInteger(-350, 350), autoAlpha:1, ease:Power2.easeOut}, Math.random() * 0.5);
}

//show sentence
for(i = 0; i < quoteSplit.words.length; i++) {
	tl.to(quoteSplit.words[i], 0.5, {rotation:randomInteger(-6, 10), x:randomInteger(-2, 2), y:randomInteger(-4, 4)}, "sentence+=" + i * 0.3);
}

//outro
tl.staggerTo(allWords, 0.3, {autoAlpha:0, scale:0, ease:Back.easeIn.config(5)}, 0.01, "+=2");

function randomInteger(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);

}


	tl.staggerFrom(splitTitle.chars, .75, {autoAlpha:0, visibility:"visible", rotationX:360, transformOrigin:"100% 100% 100", ease:Back.easeOut}, 0.10);
	tl.staggerFrom(splitTitle2.chars, .5, {autoAlpha:0, rotationX:0, transformOrigin:"0% 50% -50", rotationY:360, ease:Back.easeOut}, 0.02);
	tl.staggerFrom(splitTitle3.chars, .75, {autoAlpha:0, rotationY:360, ease:Back.easeOut}, 0.02);
	tl.to(iconOne, .5,  {css:{autoAlpha:1, scale:'1'}, ease:Back.easeOut});
	tl.to(iconTwo, .5,  {css:{autoAlpha:1, scale:'1'}, ease:Back.easeOut});
	tl.to(iconThree, .5,  {css:{autoAlpha:1, scale:'1'}, ease:Back.easeOut});
	tl.to(indexBtn, .75,  {css:{autoAlpha:1, scale:'1'}});
    },
    on: function() {
      return console.log('Mag On', this.condition);
    },
    off: function() {
      return console.log('Mag Of', this.condition);
    }
  });

}).call(this);