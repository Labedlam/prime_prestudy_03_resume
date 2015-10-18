jQuery(document).ready(function(){
 console.log("hello")

	
	//$('.flexbox').find(li);
		$('.flexbox').find('li').hide();
//$('.flexbox').toggle();
$('.Eclass1').on('click', function(){   // When button is clicked all conent is shown
	//$(this).addClass('.hidden');
	//$(this).css('background','purple');

	$(this).find('li').slideToggle();
	 console.log( "homie come on now" );
});



$('.flexbox').on('click', 'li',function(){
	$('li').toggle();
});



//$(this).addClass('.hidden');
//$(this).css('visibility','visible');
	//$(this).css('background','purple');
	//$(this).find('ul').css('visibility','visible');


	 //console.log( "homie come on now" );



});