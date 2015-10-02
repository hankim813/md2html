(function(){
	$(document).ready(function (){
		window.convert = function () {
			var data = { md: $('#markdown').val() };
			$.ajax({
				// url: 'http://localhost:3000/convert',
				url: 'https://md2html.herokuapp.com/convert',
				data: data,
				dataType: 'json',
				type: 'post',
				success: function (res){
					// temporarily stash in html to parse using jquery
					$('#processor').html(res.html);
					// programmatically add anchor links to headers
					addAnchorLinks();
					displayHtml();
				}
			});
		}

		function addAnchorLinks (){
			var headers = $('#processor').find('h1, h2, h3, h4, h5, h6');
			var link;
			var id;
			for (var i = 0; i < headers.length; i++) {
				id = headers[i].id;
				link = '<a href="#' + id + '"></a>';
				$('#' + id).wrapInner(link);
			}
		}

		function displayHtml (){
			var html = $('#processor').html();
			$('#result').val(html).focus().select();
		}
	})
})()
