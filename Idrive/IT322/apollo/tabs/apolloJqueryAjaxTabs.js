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
			
			$('#tab1').empty();
			$('#tab2').empty();
			$('#tab3').empty();
			//find each record friends is the name of the table
			$(xml).find ("apollo").each(function(){
				//create the set of data using the fields in the xml
				var info = '<li class = "myList">Flight: '
				+$(this).find("Flight").text()+'<br>'
				+'Crew: '
				+$(this).find("Crew").text()+'<br>'
				+'<a href='
				+$(this).find("TheLink").text()+'>'
				+$(this).find("Flight").text()
				+'</a>'
				+'<img src=../images/'
				+$(this).find("Patch").text()
				+' width="130" height="130" alt=">'
				+$(this).find("Flight").text()
				+' Flight Patch"/></li><br>';
				
				//add the info to the div on the page
				if($(this).find("LaunchVehicle").text() == 'Saturn V'){
					$('#tab1').append(info);
				}
				if($(this).find("LaunchVehicle").text() == 'Saturn IB'){
					$('#tab2').append(info);
				}
				if($(this).find("Spacecraft").text() == 'Apollo CSN'){
					$('#tab3').append(info);
				}
			});
			
		}
	});
	
});