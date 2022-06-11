$(document).ready(function() {
	$('button.services-card').on('click', function() {
		let obj = $(this);
		$('.service .container').removeClass('visible');
		$('.service .container[data-id="' + obj.attr('data-id') + '"]').addClass('visible');
	});
});

$(document).ready(function() {
	$('a.header-nav-button').on('click', function() {
		let obj2 = $(this);
		$('.services, .hello, .company, .works, .contacts, .thank').removeClass('visible');
		$('.company[data-id="' + obj2.attr('data-id') + '"]').addClass('visible');
		$('.hello[data-id="' + obj2.attr('data-id') + '"]').addClass('visible');
		$('.services[data-id="' + obj2.attr('data-id') + '"]').addClass('visible');
		$('.service .container').removeClass('visible');
		$('.thank[data-id="' + obj2.attr('data-id') + '"]').addClass('visible');
		$('.thank .container').removeClass('visible');
		$('.works[data-id="' + obj2.attr('data-id') + '"]').addClass('visible');
		$('.contacts[data-id="' + obj2.attr('data-id') + '"]').addClass('visible');
		// $('.works .swiper[data-id="' + obj2.attr('data-id') + '"]').addClass('visible');
	});
});