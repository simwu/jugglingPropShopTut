//Javascript's version
/*
window.onload-fucntion()
{
	
}
*/

/* This Carousel transtion works by targeting the specials id it affects only the special carousel.  Uses jQuery. */
$(document).ready(function(){
	$('#specials').carousel( {
		interval: 6500		// 6.5 seconds
	});
	$('#reviews').carousel( {
		interval: 0			// Stop auto transition
	});
	$('#juggling-bags-list').carousel( {
		interval: 6500		// 6.5 seconds
	});
	$('#chainsaws-list').carousel( {
		interval: 6500		// 6.5 seconds
	});
	$('#juggling-pins-list').carousel( {
		interval: 6500		// 6.5 seconds
	});
	document.getElementById("bags-button").addEventListener("click", bagsButtonClick);
	document.getElementById("chainsaws-button").addEventListener("click", sawsButtonClick);
	document.getElementById("pins-button").addEventListener("click", pinsButtonClick);
});

// Javascript
function bagsButtonClick(event)
{
	window.location = "jugglingbags.html";
}

function sawsButtonClick(event)
{
	window.location = "chainsaws.html";
}

function pinsButtonClick(event)
{
	window.location = "jugglingpins.html";
}