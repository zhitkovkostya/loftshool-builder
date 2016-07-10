$(document).ready(function () {
	var imgs = [];
	var vids = [];
	$.each($('*'), function () {
		var $this = $(this),
			background = $this.css('background-image'),
			video = $this.is('video'),
			img = $this.is('img');

		if (background != 'none') {
			var path = background.replace('url("', '').replace('")', '');

			imgs.push(path);
		}

		if (video) {
			var path = $this.attr('src');

			if (path) {
				vids.push(path);
			}
		}

		if (img) {
			var path = $this.attr('src');

			if (path) {
				imgs.push(path);
			}
		}
	});

	var percents = 1;

	for (var i = 0; i < imgs.length; i++) {
		var image = $('<img>', {
			attr: {
				src: imgs[i]
			}
		});

		image.load(function () {
			setPercents(imgs.length, percents);
			percents++;
		});
	}

	function setPercents(total, current) {
		var percent = Math.ceil(current / total * 100);
		$('.l-preloader__progress').text(percent);
		console.log($('.l-preloader__progress').text());
		if (percent >= 100) {
			$('.l-preloader').css({'display': 'none'});
			$('.l-wrapper').css({'display': 'flex'});
		}

		$('.preloader__progress').text(percent + '%');
	}
});
/* Открыть меню */
$('.m-menu-toggle').on('click', function (e) {
	e.preventDefault();
	$('.l-overlap').toggleClass('js-hide');
	$('.m-menu-toggle').toggleClass('js-hide');
});

/* Перевернуть карточку на главной */
$('.m-login-button').on('click', function (e) {
	e.preventDefault();
	$('.l-card-container').toggleClass('js-flip');
});

/* Scroll Down */
$(".m-arrow-down").on("click", function (e) {
	e.preventDefault();

	$('html, body').animate({scrollTop: $(window).height()}, 1000);

});

/* Parallax (on scroll) */
$(window).scroll(function () {
	var wScroll = $(window).scrollTop();

	(function () {

		var
			userpic = $('.m-page-info__userpic'),
			username = $('.m-page-info__username'),
			title = $('.m-page-info__title'),
			description = $('.m-page-info__description'),
			stars = $('.m-page-info__background');

		slideIt(userpic, wScroll / 2, 0);
		slideIt(username, wScroll / 3, 0);
		slideIt(title, wScroll / 3, 0);
		slideIt(description, wScroll / 4, 0);
		slideIt(stars, wScroll / 2, -50);

		function slideIt(block, strafeAmount, translateX) {
			var strafe = -strafeAmount + '%',
				transormString = 'translate3d(' + translateX + '%, ' + strafe + ', 0)';

			block.css({
				'transform': transormString
			});
		}
	}());

});

/* Parallax (on mouse move) */
$(document).ready(function () {

	var layer = $('.l-parallax');

	$(window).on('mousemove', function (e) { // Навешиваем событие перемещени мыши на window, первым аргументом в функцию-обработчик события отправляется ссылка на объект события
		var mouse_dx = (e.pageX); // Узнаем положение мышки по X
		var mouse_dy = (e.pageY); // Узнаем положение мышки по Y
		// Т.к. мы делим экран на четыре части что бы в центре оказалась точка координат 0, то нам надо знать когда у нас будет -Х и +Х, -Y и +Y
		var w = (window.innerWidth / 2) - mouse_dx; // Вычисляем для x перемещения
		var h = (window.innerHeight / 2) - mouse_dy; // Вычисляем для y перемещения

		var bottomPosition = ((window.innerHeight) - 700); // Вычисляем на сколько нам надо опустить вниз наш слой что бы при перемещении по Y не видно было краев
		var widthPosition = -50 + w * (2 / 1000); // Вычисляем коофицент смешения по X
		var heightPosition = h * (2 / 1000); // Вычисляем коофицент смешения по Y
		layer.css({ // Выбираем элемент и добавляем css
			'bottom': '-' + bottomPosition + 'px',  // Выставляем bottom
			'transform': 'translate3d(' + widthPosition + '%, ' + heightPosition + '%, 0)' // Используем translate3d для более лучшего рендеринга на странице
		});
	});
})

/* Слайдер */
$(document).ready(function () {
	
	(function () {

		var btn = $(".m-slider__controls_button");
		var btnPrev = $(".m-slider__controls_button-left");
		var btnNext = $(".m-slider__controls_button-right");

		var slidesInfo = $(".m-slider__description").find(".m-project__item");
		var slidesPreview = $(".m-slider__preview").find(".m-project__item");
		var slidesLeft = $(".m-slider__controls_left").find(".m-project__item");
		var slidesRight = $(".m-slider__controls_right").find(".m-project__item");

		btn.on("click", function () {
			slideDown($(this), slidesInfo);
			slideDown($(this), slidesPreview);
			slideDown($(this), slidesLeft);
			slideUp($(this), slidesRight);
		});


		function slideDown(button, slides) {
			var activeSlide = slides.closest(".m-project__item_active");
			var count = $.inArray(activeSlide[0], slides);
			if (button.hasClass("m-slider__controls_button-left")) {
				if (count === 0) {
					count = slides.length - 1;
				} else {
					count--;
				}
			} else {
				if (count === slides.length - 1) {
					count = 0;
				} else {
					count++;
				}
			}
			$(activeSlide).animate({"top":"100%"}, 300).removeClass("m-project__item_active").animate({"top":"-100%"}, 0);
			activeSlide = slides[count];
			$(activeSlide).animate({"top":"0%"}, 300).addClass("m-project__item_active");
		}

		function slideUp(button, slides) {
			var activeSlide = slides.closest(".m-project__item_active");
			var count = $.inArray(activeSlide[0], slides);
			if (button.hasClass("m-slider__controls_button-left")) {
				if (count === 0) {
					count = slides.length - 1;
				} else {
					count--;
				}
			} else {
				if (count === slides.length - 1) {
					count = 0;
				} else {
					count++;
				}
			}
			
			$(activeSlide).animate({"top":"-100%"}, 300).removeClass("m-project__item_active").animate({"top":"100%"}, 0);
			activeSlide = slides[count];
			$(activeSlide).animate({"top":"100%"}, 0).animate({"top":"0%"}, 300).addClass("m-project__item_active");
		}

	}());
});

/* Scroll Spy */
$(window).scroll(function() {
	var
		wScroll = $(window).scrollTop(),
		menu = $('.m-blog-contents'),
		sidebar = $('.l-blog__nav'),
		stickyStart = sidebar.offset().top;
	if (wScroll >= stickyStart + 10) {
		menu.css({
			"top" : wScroll - stickyStart + 10 + "px"
		});
	}
});

/* Инициализация карты */
$(document).ready(function () {
	var a = document.getElementById("m-map");
	new google.maps.Map(a, {
		center: {lat: 59.947, lng: 30.32},
		zoom: 15,
		scrollwheel: !1,
		disableDefaultUI: !0,
		navigationControl: !1,
		mapTypeControl: !1,
		scaleControl: !1,
		draggable: !1,
		styles: [{
			featureType: "administrative",
			elementType: "labels.text.fill",
			stylers: [{color: "#444444"}]
		}, {
			featureType: "landscape",
			elementType: "all",
			stylers: [{color: "#f2f2f2"}]
		}, {
			featureType: "landscape.natural.landcover",
			elementType: "geometry.fill",
			stylers: [{visibility: "on"}]
		}, {
			featureType: "landscape.natural.landcover",
			elementType: "geometry.stroke",
			stylers: [{visibility: "on"}]
		}, {
			featureType: "poi",
			elementType: "all",
			stylers: [{visibility: "off"}]
		}, {
			featureType: "poi.attraction",
			elementType: "geometry.fill",
			stylers: [{visibility: "on"}]
		}, {
			featureType: "poi.attraction",
			elementType: "geometry.stroke",
			stylers: [{visibility: "on"}]
		}, {
			featureType: "poi.business",
			elementType: "geometry.fill",
			stylers: [{visibility: "on"}, {hue: "#002eff"}, {weight: "6.16"}]
		}, {
			featureType: "poi.business",
			elementType: "geometry.stroke",
			stylers: [{visibility: "on"}, {hue: "#00ffb9"}]
		}, {
			featureType: "poi.business",
			elementType: "labels.text.fill",
			stylers: [{hue: "#ff0900"}, {visibility: "on"}]
		}, {
			featureType: "poi.business",
			elementType: "labels.text.stroke",
			stylers: [{hue: "#ff0000"}, {visibility: "on"}]
		}, {
			featureType: "poi.business",
			elementType: "labels.icon",
			stylers: [{visibility: "on"}, {hue: "#ff00b0"}]
		}, {
			featureType: "poi.medical",
			elementType: "geometry.fill",
			stylers: [{visibility: "on"}]
		}, {
			featureType: "poi.park",
			elementType: "geometry.fill",
			stylers: [{visibility: "on"}]
		}, {
			featureType: "poi.school",
			elementType: "geometry.fill",
			stylers: [{visibility: "on"}]
		}, {
			featureType: "poi.sports_complex",
			elementType: "geometry.fill",
			stylers: [{visibility: "on"}]
		}, {
			featureType: "road",
			elementType: "all",
			stylers: [{saturation: -100}, {lightness: 45}]
		}, {
			featureType: "road.highway",
			elementType: "all",
			stylers: [{visibility: "simplified"}]
		}, {
			featureType: "road.arterial",
			elementType: "labels.icon",
			stylers: [{visibility: "off"}]
		}, {featureType: "transit", elementType: "all", stylers: [{visibility: "off"}]}, {
			featureType: "water",
			elementType: "all",
			stylers: [{color: "#4369aa"}, {visibility: "on"}]
		}]
	})
});