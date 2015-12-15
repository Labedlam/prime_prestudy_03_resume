jQuery(document).ready(function(){
 console.log("hello")

	
$('.flexbox').find('li').hide();
$('.flexbox').hide();
slideAccomplishedTasks();
slideExperience();
hoverOver();
hoverOverDetail();
});


function slideAccomplishedTasks(){
	$('.Eclass1').on('click', function(){   
		$(this).find('li').slideToggle();
	 	console.log( "homie come on now" );

	});
}

function slideExperience(){
	$('.button').on('click',function(){
		$(this).nextUntil('.button').slideToggle();
		console.log("hey there");
	});
}// im running into the problem where only one of my experiences is toggling 
//I need to find a way to call only a select few elements 
// I could maybe use filter if I add a specific class

function hoverOver(){
	$('.button').hover(function(){
		$(this).toggleClass("highlight");
		console.log("im suppose to highlight");
	});	

};// couldnt understand why the color of the paragraph wont change

function hoverOverDetail(){
	$('.Eclass1').hover(function(){
		$(this).toggleClass("highlight");
		console.log("im suppose to highlight again");
	});	

};