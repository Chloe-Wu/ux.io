// JavaScript Document
$(document).ready(function(){
	'use strict';
	var currentID = 1;
	populatePage(5); //force the first one to be displayed
	
	// function to get button value and send it to populatePage()
	$(".button").on('click',function(){
		var clickedValue = $(this).val();
		populatePage(clickedValue);		
	});
	
	function populatePage(currentID){
	//use jQuery ajax call
	$.ajax({
		url:"prints.xml",
		cache: false,
		dataType: "xml",
		success: function(xml){
			//empty the div on the screen
			$("#contents").empty();
			$("#bigPic").empty();
			//find each record - friends is the name of the table
			$(xml).find("print").each(function(){
				//create the set of data using the fields in the xml
				var info = '<div class="leftCol">'
				+$(this).find("subject").text()
				+'<br>'+$(this).find("artist").text()+'</div>'
				+'<div class = "rightCol"><br>Size: '
				+$(this).find("printSizes").text()
				+'<br>Description: '
				+$(this).find("desc").text()
				+'<br>Price: '
				+$(this).find("cost").text()
				+'</div><br class="clearIt">';
				+'</div><br class="clearIt">';
			// add the info to the div on the page
				if ($(this).find("ID").text()==currentID){
				$("#contents").append(info);
				$("#bigPic").append('<img src=images/'
				+$(this).find("photo").text()
				+' width="260" height="260" alt="'
				+$(this).find("Flight").text()
				+' Flight Patch"/>')};
			});
		}
	});
};
});