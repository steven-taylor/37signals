

$(document).ready(function(){
	
	/* hide verbiage till hover */
		$('.bc-hover').hide();
		 $('#bc-arrow').hide();
		$('.hr-hover').hide();
		 $('#hr-arrow').hide();
		$('.cf-hover').hide();
		 $('#cf-arrow').hide();

	
	/* show verbiage during hover */
	
	$('.basecamp').hover(function(){ 
		$('.no-hover').toggle();
		$('.bc-hover').toggle();
		$('#bc-arrow').toggle();
	});
		
	$('.highrise').hover(function(){ 
		$('.no-hover').toggle();
		$('.hr-hover').toggle();
		$('#hr-arrow').toggle();
	});
		
	$('.campfire').hover(function(){ 
		$('.no-hover').toggle();
		$('.cf-hover').toggle();
		$('#cf-arrow').toggle();
	});		

});		
		
		
		
		
	
	//var bcElement = $('bc-hover');