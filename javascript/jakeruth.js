$(function () {
	var i = 1;
	var background;
	
	$('#1').on('click', function () {
		if ((background === undefined) || (background === null)) {
		background = setInterval(function () {console.log(background);
			if (i > 21) {
				i = 1;
			}
			
			$('.background').attr('src', 'images/Polygons/' + (i++) + '.jpg');
		}, 1800);
		}
	});
	$('#2').on('click', function () {
		clearInterval(background);
		background = null;
	});
	$('#3').on('click', function () {
		$('.home1').hide();
		$('.home2').show();
	});
	$('#4').on('click', function () {
		$('.home2').hide();
		$('.home1').show();
	});
	
	
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