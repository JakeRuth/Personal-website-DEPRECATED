$(function () {
	$('.resume-button').on('click', openResumeViewer);
	$('#back-button').on('click', closeResumeViewer);
	$('#back-arrow').on('click', closeResumeViewer);
});

var openResumeViewer = function () {
	slideBackButton();
	$('.content').fadeOut(300);
	setTimeout(function () {
		$('.resume-container').fadeIn(1000);
	}, 300);
}

var closeResumeViewer = function () {
	$('.resume-container').fadeOut(300);
	setTimeout(function () {
		$('.content').fadeIn(1000);
	}, 300);
}

var slideBackButton = function () {
	var backButton = $('#back-button');
	var backArrow = $('#back-arrow');
	
	if (backButton.length && backArrow.length) {
		backButton.fadeIn(2000);
		backArrow.fadeIn(2000);
	}
}

var closeBackButton = function () {
	$('#back-button').fadeOut();
	$('#back-arrow').fadeOut();
}