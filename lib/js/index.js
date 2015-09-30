(function(){
	$(document).ready(function (){
		window.convert = function () {
			var data = { md: $('#markdown').val() };
			$.ajax({ 
				url: 'https://md2html.herokuapp.com/convert',
				data: data,
				dataType: 'json',
				type: 'post',
				success: function (res){
					$('#result').val(res.html);
					$('#result').focus().select();
				}
			});
		}
	})
})()
