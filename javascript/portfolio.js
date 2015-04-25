$(function () {
	slideBackButton();
});

var slideBackButton = function () {
	var backButton = $('#back-button');
	var backArrow = $('#back-arrow');
	
	setTimeout(function () {
		if (backButton.length && backArrow.length) {
			backButton.fadeIn(2000);
			backArrow.fadeIn(2000);
		}
	}, 500);
}