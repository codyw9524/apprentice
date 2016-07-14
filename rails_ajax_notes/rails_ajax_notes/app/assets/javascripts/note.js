$(document).on('submit', 'form', function(){
	$.post($(this).attr('action'), $(this).serialize(), function(response){
		$('div#notes').html(response);
		$('input#title').val('');
	})
	return false;
})

$(document).on('keyup', '#search', function(){
	$(this).submit();
})

$(document).on('change', '#search_form', function(){
	$(this).submit();
})