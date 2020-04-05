$(document).ready(function () {
	$('.menu-toggler').on('click', function () {
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
	});
	$('.top-nav .nav-link').on('click', function () {
		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	});
	AOS.init({
		easing: 'ease',
		duration: 1800
	});
	 
});
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#up').fadeIn();
    } else {
        $('#up').fadeOut();
    }
});
$(document).ready(function() {
    $("#up").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
