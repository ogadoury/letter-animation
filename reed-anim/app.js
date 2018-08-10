// FUNCTION TO TRANSLATE 'R'

function startTrans() {
	var letter = $('#letter');
	letter.animate({
	left: 158,
	top: 148
	}, 3000, 'swing', function() {
		resetTrans();
	});
}


function resetTrans() {
	var letter = $('#letter');
	letter.animate({
	left: -8,
	top: 8
	}, 3000, 'swing', function() {
		startTrans()
	});
}


$(function() {
	startTrans();
});



// FUNCTION FOR STICKY DOTS


