$(function () {
	var aboutTab = $('.about-tab'),
		portfolioTab = $('.portfolio-tab');
	var portfolioClicked = false;

	startPhotoChanger();
	
	aboutTab.on('click', function () {
		if (!aboutTab.hasClass('selected')) {
			$('.portfolio-page').fadeOut(500);
			setTimeout(function () {
				$('.about-page').fadeIn(500);
			}, 500);
			toggleSelectedTab();
		}
	});
	
	portfolioTab.on('click', function () {
		if (!portfolioClicked) {
			loadMyPictures();
		}
		portfolioClicked = true;
		
		if (!portfolioTab.hasClass('selected')) {
			$('.about-page').fadeOut(500);
			setTimeout(function () {
				$('.portfolio-page').fadeIn(500);
			}, 500);
			toggleSelectedTab();
		}
	});
});

var toggleSelectedTab = function () {
	$('.about-tab').toggleClass('selected');
	$('.portfolio-tab').toggleClass('selected');
}

var loadMyPictures = function () {
	for (var i =1; i<=12; i++) {
		$('.portfolio-page').prepend("<img class='personal-photo' src='images/MyPictures/" + i + ".jpg' />");
	}
}

var startPhotoChanger = function () {
	var filePathBase = "images/Me/";
	var maxPictureCount = 9;
	var counter = 2;
	var image = document.getElementById('current-me-image');
	var imageContainer = $('.image-container');
	var imageAndSubtitle = [
		{
			index: 1,
			subtitle: 'Hello friend! My name is Jake Ruth.'
		},
		{
			index: 2,
			subtitle: 'I wish this was true.'
		},
		{
			index: 3,
			subtitle: 'I love dogs, and they love me back :)'
		},
		{
			index: 4,
			subtitle: 'If you enjoy food and drinks we will get along!'
		},
		{
			index: 5,
			subtitle: "Selfie in a straw hat! This should be in style."
		},
		{
			index: 6,
			subtitle: 'Believe it or not that is a carrot.'
		},
		{
			index: 7,
			subtitle: 'Striking a pose on a hike up Bear Mountain.'
		},
		{
			index: 8,
			subtitle: 'Cheers!'
		},
		{
			index: 9,
			subtitle: 'Did I mention I am also a pirate?'
		}
	];
	
	setInterval(function () {
		if (counter > maxPictureCount) {
			counter = 1;
		}
		imageContainer.fadeOut(250);
		setTimeout(function () {
			image.src = filePathBase + (imageAndSubtitle[counter-1].index) + '.jpg';
			$('.image-subtitle').text(imageAndSubtitle[counter-1].subtitle);
			imageContainer.fadeIn(250);
			counter++;
		}, 250);
	}, 4000);
}