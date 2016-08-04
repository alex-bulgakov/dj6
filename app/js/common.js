$(function() {
	var $sfMenu = $("ul.sf-menu");
	$sfMenu.superfish({
		cssArrows: false,
	});

	var owl = $(".slider");

	owl.owlCarousel({
		loop: true,
		items: 1,
		nav: true,
		navContainer: ".slider-nav .container",
		navText: [
			'<i class="fa fa-angle-left" aria-hidden="true"></i>',
			'<i class="fa fa-angle-right" aria-hidden="true"></i>'
		]
	});

$(".news__text").matchHeight();


	var prev = $(".owl-prev");
	var next = $(".owl-next");
	prev.addClass("col-md-1");
	next.addClass("col-md-1");

	$(".main-head__mobile-menu").click(function () {
		$(".burger-menu").toggleClass("menu-on");
	});

$(function () {
	$("#menu").slicknav({
		label: "Меню",
		prependTo: ".main-head__top-line"
	});
});

$('.callback-popup').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 100,
		mainClass: 'my-mfp-zoom-in',

		focus: "input"
	});

$(".callback-popup").click(function () {
	$("#callback .form-name").val($(this).data("form"));
	// console.log($(this).data("form"));
});
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
				$(".success").addClass("visible");
			setTimeout(function() {
				// Done Functions
				$.magnificPopup.close();
				th.trigger("reset");
				$(".success").removeClass("visible");
			}, 3000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
