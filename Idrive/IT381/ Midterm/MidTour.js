// JavaScript Document
$(document).ready(function(){
	'user strict';
	//user jQuery ajax call
	$.ajax({
		url:"tripsList.xml",
		cache:false,
		dataType:"xml",
		success:function(xml){
			//empty the div on the screen
			
			$("#contents").empty();
			//find each record friends is the name of the table
			$(xml).find ("tour").each(function(){
				//create the set of data using the fields in the xml
				var info = '<img src='
				+$(this).find("model").text()
				+' width="130" height="130" alt="'
				+$(this).find("cost").text()
				+' Flight Patch"/></div>'
				+'<div class = "rightCol"><strong>Flight: '
				+'<a href='
				+$(this).find("notes").text()+'>'
				+$(this).find("Flight").text()
				//add the info to the div on the page
				$("#contents").append(info);
			});
		}
	});
	
});