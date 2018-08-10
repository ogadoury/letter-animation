// FUNCTION TO TRANSLATE 'R'

function startTrans() {
	var letter = $('#letter');
	letter.animate({
	left: 164,
	top: 156
	}, 3000, 'swing', function() {
		resetTrans();
	});
}


function resetTrans() {
	var letter = $('#letter');
	letter.animate({
	left: 2,
	top: 16
	}, 3000, 'swing', function() {
		startTrans()
	});
}


$(function() {
	startTrans();
});


// FUNCTION FOR STICKY DOTS
