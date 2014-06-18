//Index

//Creativo - title
jQuery(".indexTitle").fitText(.5, { minFontSize: '20px', maxFontSize: '280px' })

//Description
jQuery(".indexDescription").fitText(2.3, { minFontSize: '20px', maxFontSize: '180px' })

//Location
jQuery(".indexLocation").fitText(2.0, { minFontSize: '20px', maxFontSize: '180px' })


//Icons
jQuery(".icons").fitText(2.5, { minFontSize: '20px', maxFontSize: '80px' })

//ContactButton
jQuery(".indexBtn").fitText(.8, { minFontSize: '20px', maxFontSize: '180px' })


//About

//aboutTitle1
//jQuery(".aboutTitle1, .aboutTitle2").fitText(1, { minFontSize: '20px', maxFontSize: '180px' })


$(document).ready(function() { 

	(function ($) { 
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		
		$('.tab ul.tabs li a').click(function (g) { 
			var tab = $(this).closest('.tab'), 
				index = $(this).closest('li').index();
			
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			
			g.preventDefault();
		} );
	})(jQuery);

});