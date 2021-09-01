'use stirct';

const hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		closeElem = document.querySelector('.menu__close'),
		sidePanel = document.querySelector('.sidepanel'),
		sidePanelLine = document.querySelector('.sidepanel__line'),
		sidePanelText = document.querySelector('.sidepanel__text'),
		sidePanelSocial = document.querySelector('.sidepanel');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
	sidePanel.classList.add('sidepanel__menu');
	sidePanelLine.classList.add('disabled');
	sidePanelText.classList.add('disabled');
	sidePanelSocial.classList.add('visible');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
	sidePanel.classList.remove('sidepanel__menu');
	sidePanelLine.classList.remove('disabled');
	sidePanelText.classList.remove('disabled');
	sidePanelSocial.classList.remove('visible');
});

const counters = document.querySelectorAll('.progress__percent'),
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


const form = document.querySelector('.contacts__form'); 

const postData = async (url, data) => {
	const res = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}, 
		body: data, 
	});
	return await res.json();
};

BindPostData(form);

const massage = {
	succes: 'спасибо<br>Я с вами свяжусь',
	failure: 'Ошибка<br>Данные не отправлены'
};

const modalMassage = document.querySelector('.modal__massage');

const textarea = document.querySelector('.contacts__textarea textarea'); 

function BindPostData(form) {
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		modalMassage.classList.add('modal__massage_active');
		document.body.classList.toggle('overflow-hidden');
		const formData = new FormData(form);

		const json = JSON.stringify(Object.fromEntries(formData.entries())); 
		postData('https://portfolio-food-denis-default-rtdb.europe-west1.firebasedatabase.app/requests.json', json)
		.then(data => {
			console.log(data);
			modalMassage.classList.remove('modal__massage_active');
			textarea.placeholder = 'Спасибо, ваше сообщение отправлено, я с вами свяжусь';
			textarea.style.backgroundColor = '#73ff9d4f';
		})
		.catch(() => {
			textarea.placeholder = 'Произошла ошибка, ваши данные не доставлены';
			textarea.style.backgroundColor = '#ff738a4f';
		})
		.finally(() => {
			form.reset();
		});
	});
}