var slidePosition = 0;
var slideCount = 0;

$(function () {
	slideCount = $('.slide').length;
	slidePosition = slideCount * 20;

	$('.slides').scrollLeft($('.slide').width() * (slidePosition % slideCount));

	$(document).on('keydown', function (event) {
		if (event.keyCode == 36) { // ->
			slidePosition = slideCount * 20;
			moveSlide();
		}
		if (event.keyCode == 35) { // ->
			slidePosition = slideCount * 20 - 1;
			moveSlide();
		}
		if (event.keyCode == 34) { // pgdn (+10)
			slidePosition += 10;
			moveSlide();
		}
		if (event.keyCode == 33) { // pgup (-10)
			slidePosition -= 10;
			moveSlide();
		}
		if (event.keyCode == 39) { // ->
			slidePosition++;
			moveSlide();
		}
		if (event.keyCode == 37) { // <-
			slidePosition--;
			moveSlide();
		}
		if (event.keyCode == 49) { // 1
			memeSwitch('assets/you_didnt_see_anything_madagascar.gif');
		}
		if (event.keyCode == 50) {
			memeSwitch('assets/inception.jpg');
		}
		if (event.keyCode == 51) {
			memeSwitch('assets/neuralizer.png');
		}
		if (event.keyCode == 52) {
			memeSwitch('assets/plasma_by_tobaal-d30k3ak.gif');
		}
		// alert(event.keyCode);
	})
});

function moveSlide() {
	$('.slides').stop().animate({'scrollLeft': $('.slide').width() * (slidePosition % slideCount)}, 600);
}

function memeSwitch(pic)
{
	if ($('#meme').data('on') == 1) {
		$('#meme').data('on', 0);
		$('#meme').animate({opacity: 0}, 250);
		$('.bg').animate({opacity: 1}, 1000);
	} else {
		$('#meme').data('on', 1);
		$('.bg').animate({opacity: 0}, 250);
		$('#meme').css({opacity: 0, position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', background: 'url(' + pic + ') no-repeat center center'});
		$('#meme').animate({opacity: 1}, 1000);
	}
}