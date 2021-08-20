const hamburger = document.querySelector('.hamburger');
		menu = document.querySelector('.menu');
		closeElem = document.querySelector('.menu__close');
		sidePanel = document.querySelector('.sidepanel');
		sidePanelLine = document.querySelector('.sidepanel__line');
		sidePanelText = document.querySelector('.sidepanel__text');
		sidePanelSocial = document.querySelector('.sidepanel')

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
	sidePanel.classList.add('sidepanel__menu');
	sidePanelLine.classList.add('disabled');
	sidePanelText.classList.add('disabled');
	sidePanelSocial.classList.add('visible')
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
	sidePanel.classList.remove('sidepanel__menu');
	sidePanelLine.classList.remove('disabled');
	sidePanelText.classList.remove('disabled');
	sidePanelSocial.classList.remove('visible')
});

const counters = document.querySelectorAll('.progress__percent');
	lines = document.querySelectorAll('.progress__bar span');

counters.forEach( (item, i) => {
	lines[i].style.width = item.innerHTML;
});

$(document).ready(function(){
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1000) {
			$('.page_up').fadeIn();
		} else {
			$('.page_up').fadeOut();
		}
	});

	$("a[href^='#up']").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	$('.menu__link').each(function(i){
		$(this).on('click', () => {
			menu.classList.remove('active');
			sidePanel.classList.remove('sidepanel__menu');
			sidePanelLine.classList.remove('disabled');
			sidePanelText.classList.remove('disabled');
			sidePanelSocial.classList.remove('visible')
		});
	});
		
});