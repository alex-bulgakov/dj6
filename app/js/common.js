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
/*
var tgl = true;
$(".main-head__mobile-menu").click( function () {
	$(".main-head__top-line .container").attr("id", "my-menu");
	$("#my-menu").mmenu({
	});
	var mmenuAPI = $("#my-menu").data("mmenu");
	if( tgl ) {
		mmenuAPI.open();
		tgl = false;
	}
	else {
		mmenuAPI.close();
		tgl = true;
	}
	$(".burger-menu").toggleClass("menu-on");
});*/

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
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
