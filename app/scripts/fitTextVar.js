

//Index
//Creativo - title
jQuery(".indexTitle").fitText(.7, { minFontSize: '20px', maxFontSize: '280px' })

//Description
jQuery(".indexDescription").fitText(2.4, { minFontSize: '20px', maxFontSize: '180px' })

//Location
jQuery(".indexLocation").fitText(2.0, { minFontSize: '20px', maxFontSize: '180px' })


//Icons
jQuery(".icons").fitText(3, { minFontSize: '20px', maxFontSize: '60px' })

//ContactButton
jQuery(".indexBtn").fitText(1.2, { minFontSize: '20px', maxFontSize: '180px' })

//mobileIndex
jQuery("#mobileSplashLogo").fitText(.3, { minFontSize: '20px', maxFontSize: '80px' })
jQuery("#mobileSplashDiscOne").fitText(1.2, { minFontSize: '20px', maxFontSize: '80px' })
jQuery("#mobileSplashDiscTwo").fitText(1.2, { minFontSize: '20px', maxFontSize: '80px' })
//About

//aboutTitle1
jQuery(".aboutTitle1").fitText(1, { minFontSize: '20px', maxFontSize: '180px' })

jQuery(".aboutTitle2").fitText(.55, { minFontSize: '20px', maxFontSize: '180px' })

jQuery(".aboutTitle3").fitText(1, { minFontSize: '20px', maxFontSize: '180px' })

//Icon Titles
jQuery("#iconTitle1").fitText(.8, { minFontSize: '20px', maxFontSize: '180px' })
jQuery("#iconTitle2").fitText(.8, { minFontSize: '20px', maxFontSize: '180px' })
jQuery("#iconTitle3").fitText(.8, { minFontSize: '20px', maxFontSize: '180px' })
jQuery("#iconTitle4").fitText(.8, { minFontSize: '20px', maxFontSize: '180px' })

//Mobile PX
jQuery(".mobilePX1Shadow").fitText(1, { minFontSize: '30px', maxFontSize: '80px' });
jQuery(".mobilePX2Shadow").fitText(1.1, { minFontSize: '30px', maxFontSize: '80px' });
jQuery(".mobilePX3Shadow").fitText(1.1, { minFontSize: '30px', maxFontSize: '80px' });

//////////////
// Flowtype //
//////////////
// $('#flowAbout').flowtype({
//  minimum   : 500,
//  maximum   : 1100,
//  minFont   : 12,
//  maxFont   : 40,
//  fontRatio : 35
// });

// $('#flowAbout2').flowtype({
//  minimum   : 500,
//  maximum   : 1100,
//  minFont   : 12,
//  maxFont   : 40,
//  fontRatio : 35
// });

$('#flowProcess').flowtype({
 minimum   : 500,
 maximum   : 900,
 minFont   : 12,
 maxFont   : 40,
 fontRatio : 25
});


////////////////
//Match Hight //
////////////////
$(function() {
    $('.pBox').matchHeight();
});

$(function() {
    $('.aBox').matchHeight();
});