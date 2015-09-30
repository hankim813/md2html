(function(){
	$(document).ready(function (){
		window.convert = function () {
			var data = { md: $('#markdown').val() };
			$.ajax({ 
				url: 'http://localhost:3000/convert',
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
