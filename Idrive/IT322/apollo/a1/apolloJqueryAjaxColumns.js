// JavaScript Document
$(document).ready(function(){
	'user strict';
	//user jQuery ajax call
	$.ajax({
		url:"apollo.xml",
		cache:false,
		dataType:"xml",
		success:function(xml){
			//empty the div on the screen
			
			$("#contents").empty();
			//find each record friends is the name of the table
			$(xml).find ("apollo").each(function(){
				//create the set of data using the fields in the xml
				var info = '<div class ="leftCol"><img src=images/'
				+$(this).find("Patch").text()
				+' width="130" height="130" alt="'
				+$(this).find("Flight").text()
				+' Flight Patch"/></div>'
				+'<div class = "rightCol"><strong>Constellation: '
				+'<a href='
				+$(this).find("TheLink").text()+'>'
				+$(this).find("Flight").text()
				+'</a></strong><br><Crew: '
				+$(this).find("Crew").text()
				+ '<br>Notes: '
				+$(this).find("Notes").text()
				+'</div><br class=clearIt">'
				//add the info to the div on the page
				$("#contents").append(info);
			});
		}
	});
	
});