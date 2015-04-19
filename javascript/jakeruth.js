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
});