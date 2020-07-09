// JavaScript Document
$(document).ready(function(){
	$.ajax({
		url:"final.xml",
		cache:false,
		datatype:"xml",
		success: function(xml){
			$("#content").empty();
		
			$(xml).find('task').each(function(){
				
				var info ='<span class ="titles"><strong>FOR </strong></span>'
				+ $(this).find('title').text()+"<br>"
				+'<span class ="desc"></span>'
				+ $(this).find('desc').text()+"<br>"
				+'<span class ="desc2"></span>'
				+$(this).find('desc2').text()+"<br>"
				+'<span class ="desc3"></span>'
				+$(this).find('desc3').text()+"<br>";
				
				$("#content").append(info);		 
	});
		}
	});
});