// JavaScript Document
$(document).ready(function() {
	$.ajax({
		url:"apollo.xml",
		cache:false,
		dataType:"xml",
		success: function(xml){
			$('#content').empty();
			
			$(xml).find('apollo').each(function(){
			var info= '<ul data-role="listview"><li data-id='
					+$(this).find("ID").text()
					+'><a href="#page2"'
			+'><img src=' +$(this).find("Patch").text() + ' '
			+'width = "130" height= "128">'
			+'<h1>Flight: '
			+$(this).find("Flight").text()  			
			+'</h1><p>Crew:'
			+$(this).find("Crew").text()+'</p><p>Spacecraft:'
			+$(this).find("Spacecraft").text()+'</p><p>Notes:'
			+$(this).find("Notes").text()
			+'</p></a></li></ul>';
			$('#content').append(info);
			});
		}
	});
});
var whichOne="1";
var currentOne="1";
var currentFlight="Apollo 1";
var currentPic="2";
var currentCrew="3";
$("#content").on("click","li",function(){
	whichOne=($(this).attr("data-id"));
	
	$.ajax({
		url:"apollo.xml",
		cache:false,
		dataType:"xml",
		success:function(xml1){
			
			$(xml1).find('apollo').each(function(){
				currentOne = ($(this).find("ID").text());
				if(currentOne===whichOne)
				{
					currentFlight=($(this).find("Flight").text());
					currentPic=($(this).find("Patch").text());
					currentCrew=($(this).find("Crew").text());
					
					$('#flightName').text(currentFlight);
					$('#crewInfo').text(currentCrew);
					$('#thePic').html('<img src='+currentPic+' width="300" height="225" />');
					
				}
			});
			
		}
	});
	
	});
			