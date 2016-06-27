/* Открыть меню */
$('.m-menu-toggle').on('click', function () {
	$('.l-overlap').toggleClass('js-hide');
	$('.m-menu-toggle').toggleClass('js-hide');
});

/* Перевернуть карточку на главной */
$('.m-login-button').on('click',function () {
	$('.l-card-container').toggleClass('js-flip');
});