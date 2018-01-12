$(function () {
	
//************* Modal window

	$('.book').on('click', function(){
		$('#modalwindow').addClass('show');
	})
	$('.modalw__bg').on('click', function(){
		$('#modalwindow').removeClass('show');
	});


//************** Ajax for form

	$('#form').submit(function() {
		var form_data = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "send.php",
			data: form_data,
			success: function() {
				alert("Done!");
			}
		});
	});








});
