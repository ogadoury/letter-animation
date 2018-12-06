// FUNCTION TO TRANSLATE 'R'

function startTrans() {
	var letter = $('#letter');
	letter.animate({
		left: 158,
		top: 186,
	}, 4000, 'swing', function() {
		resetTrans();
	});
}


function resetTrans() {
	var letter = $('#letter');
	letter.animate({
		top:-34,
		left:-4
	}, 4000, 'swing', function() {
		startTrans()
	});
}


$(function() {
	startTrans();
});
