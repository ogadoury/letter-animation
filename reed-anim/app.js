const cont = $( '#container' );
const letter = $( '#letter' );


// DOT BACKGROUND
// 		--- put function here ---


// function createDots(x) {
// 	var contWidth = $( '#container' ).width;
// 	var contHeight = $ ( '#container' ).height;
//     for (var rows = 0; rows < x; rows++) {
//         for (var columns = 0; columns < x; columns++) {
//             $( '#container' ).prepend( "<div class='dot'></div>" );
//         };
//     };
//     $( '.dot' ).width(200/x);
//     $( '.dot' ).height(200/x);
// }

// $(function() {
// 	createDots(24);
// })







// FUNCTION TO TRANSLATE 'R'

function startTrans() {
	var letter = $('#letter');
	letter.animate({
	left: 168,
	top: 162
	}, 3000, 'swing', function() {
		resetTrans();
	});
}


function resetTrans() {
	var letter = $('#letter');
	letter.animate({
	left: -5,
	top: 12
	}, 3000, 'swing', function() {
		startTrans()
	});
}


$(function() {
	startTrans();
});




	








// FUNCTION FOR STICKY DOTS
