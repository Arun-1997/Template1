
$(document).ready(function(){
	
	$('.contact-email, .contact-subject, .contact-message').removeAttr('placeholder');
	
	// contact form
	$('.contact-email').val('Email...');
	$('.contact-subject').val('Subject...');
	$('.contact-message').text('Message...');
	
});