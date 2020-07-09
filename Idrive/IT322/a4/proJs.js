// JavaScript Document

$(document).ready(function(){
	$.ajax({
		url:"progress.xml",
		cache:false,
		datatype:"xml",
		success: function(xml){
			$("#contents").empty();
		
			$(xml).find('task').each(function(){
				
				var info = '<br>'+'<img src=image/'
				+$(this).find("img").text()
				+' width="30" height="30" alt="'
				+'<span class ="titles"><strong>Task: </strong></span>'
				+ $(this).find('title').text()+"<br>"
				+'<span class ="titles"><strong>Description: </strong></span>'
				+ $(this).find('desc').text()+"<br>"
				+'<span class ="titles"><strong>Status: </strong></span>'
				+$(this).find('status').text()+"<br>"
				+'<span class ="titles"><strong>Finish Date: </strong></span>'
				+$(this).find('finishDate').text()+"<br>";
				
				$("#contents").append(info);
				if ($(this).find('status').text()=='Completed'){
					var info='<a href=' + $(this).find('link').text()+'>See the page</a>'
					$('#contents').append(info);};
				
					$('#contents').append('<br><hr>');
				
				 
	});
		}
	});
});