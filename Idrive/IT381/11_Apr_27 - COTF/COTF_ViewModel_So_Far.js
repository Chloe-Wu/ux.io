// JavaScript Document

// Model - Variable list
var currentOne = "1",
	currentBrand = "brand",
	currentModel = "model",
	currentPrice = "price",
	currentPic = "pic name",
	currentInterest = "interest",
	currentTerm	 = "term",
	currentSalesTax = "tax",
	whichOne = "1";

// initialize the page - read the XML, create the inventory list
$(document).on("pagecreate", function(){
	"use strict";
	$.ajax({
		url:"computersList.xml",
		cache:false,
		dataType:"xml",
		success: function(xml){
			$('#inventoryList').empty();
			$(xml).find('computer').each(function(){
				var info=
					'<li data-id='
					+$(this).find("ID").text()
					+'><a href=#page1><img src='
					+$(this).find("pic").text()
					+'><h1>Model: '
					+$(this).find("model").text()
					+'</h1><p>Brand: '
					+$(this).find("brand").text()
					+'</p><p>Cost: $'
					+$(this).find("cost").text()
					+'</p><p>Notes: '
					+$(this).find("notes").text()
					+'</p></a></li>';
				$('#inventoryList').append(info).listview('refresh');
			});
		}
	});

	


// handle a click on the listview - Populate the next page with the correct information	
$("#inventoryList").on("click","li",function(){
	
	});

// Calculate the total payments - called by entering the #page2 or clicking #calcButton
function calcIt(){

	}

$('#calcButton').click(calcIt);
	
});
