$(function() {
	$('input[type=text], textarea').each(function () {
		$(this).attr('data-name',$(this).val()).addClass('jn-active jn-placeholder');
	});

	$('input[type=text], textarea').on('click', function() {
		if( $(this).val() == $(this).data('name') ) {
			$(this).val('').removeClass('jn-placeholder');
		}
		
		return;		
	}).on('focus', function() {
		$(this).click();
	}).on('blur', function() {
		if( $(this).val() == '' ) {
			$(this).val( $(this).data('name') ).addClass('jn-placeholder');
		}
	});	
});//End