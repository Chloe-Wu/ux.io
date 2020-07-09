// JavaScript Document
$(document).ready(function(){
	'user strict';
	//user jQuery ajax call
	$.ajax({
		url:"friends.xml",
		cache:false,
		dataType:"xml",
		success:function(xml){
			//empty the div on the screen
			
			$("#contents").empty();
			//find each record friends is the name of the table
			$(xml).find ("friends").each(function(){
				//create the set of data using the fields in the xml
				var info = "Name: "
				+ $(this).find("firstName").text() + " "
				+ $(this).find("lastName").text() 
				+ "<br>Favorite food: "
				+ $(this).find("food").text()
				+ "<br>Pet:"
				+$(this).find("pet").text()
				+ "<hr>";
				//add the info to the div on the page
				$("#contents").append(info);
			});
		}
	});
	
});