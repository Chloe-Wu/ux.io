// JavaScript Document

function getMyTrips(){
	// from dayTrips1.html
	// retrieve TourName
	if(localStorage.key1TourName){usertext="Item: " +localStorage.key1TourName;}
	else {usertext = 'No meal selected'}
	$('#tourName1').html(usertext);

	// retrieve Length
	if(localStorage.key1Length){usertext="Description: " +localStorage.key1Length;}
	else {usertext = ''}
	$('#length1').html(usertext);
	
	// retrieve Price
	if(localStorage.key1Price){usertext="Price: " +localStorage.key1Price;}
	else {usertext = ''}
	$('#price1').html(usertext);
	
	// retrieve Visit
	if(localStorage.key1Visit){usertext="Combo includes: " +localStorage.key1Visit;}
	else {usertext = ''}
	$('#visit1').html(usertext);
	
	// retrieve Pic
	if(localStorage.key1Pic){
		usertext=localStorage.key1Pic;
		$('#pic1').html('<img src=media/'+usertext+' width="160" height="120" />');
		}
	else {usertext = ''
		$('#pic1').html(usertext);
		}	
	
	//from dayTrips2.html
	// retrieve TourName
	if(localStorage.key2TourName){usertext="Item: " +localStorage.key2TourName;}
	else {usertext = 'No side selected'}
	$('#tourName2').html(usertext);

	// retrieve Length
	if(localStorage.key2Length){usertext="Description: " +localStorage.key2Length;}
	else {usertext = ''}
	$('#length2').html(usertext);
	
	// retrieve Price
	if(localStorage.key2Price){usertext="Price: " +localStorage.key2Price;}
	else {usertext = ''}
	$('#price2').html(usertext);
	
	// retrieve Visit
	if(localStorage.key2Visit){usertext="Option:" +localStorage.key2Visit;}
	else {usertext = ''}
	$('#visit2').html(usertext);
	
	// retrieve Pic
	if(localStorage.key2Pic){
		usertext=localStorage.key2Pic;
		$('#pic2').html('<img src=media/'+usertext+' width="160" height="120" />');
		}
	else {usertext = ''
		$('#pic2').html(usertext);
		}	
	
	//from 3
	// retrieve TourName
	if(localStorage.key3TourName){usertext="Item: " +localStorage.key3TourName;}
	else {usertext = 'No drink selected'}
	$('#tourName3').html(usertext);

	// retrieve Length
	if(localStorage.key3Length){usertext="Size option: " +localStorage.key3Length;}
	else {usertext = ''}
	$('#length3').html(usertext);
	
	// retrieve Price
	if(localStorage.key3Price){usertext="Price: " +localStorage.key3Price;}
	else {usertext = ''}
	$('#price3').html(usertext);
	
	// retrieve Visit
	if(localStorage.key3Visit){usertext="You can choose:" +localStorage.key3Visit;}
	else {usertext = ''}
	$('#visit3').html(usertext);
	
	// retrieve Pic
	if(localStorage.key3Pic){
		usertext=localStorage.key3Pic;
		$('#pic3').html('<img src=media/'+usertext+' width="160" height="120" />');
		}
	else {usertext = ''
		$('#pic3').html(usertext);
		}	
	
}
function clearItems() {
	localStorage.clear();
	location.reload();	
}

if(parseFloat(localStorage.key3Price.slice(1))){parseFloat(localStorage.key3Price.slice(1))=="";}
var subto = parseFloat(localStorage.key1Price.slice(1))+parseFloat(localStorage.key2Price.slice(1))+parseFloat(localStorage.key3Price.slice(1));
$('#subtotal').html("Subtotal:$"+subto);
var total = subto*1.08;
var wdelivery = total *1.1;
$('#total').html("Total(with tax and delivery fee):$"+wdelivery.toFixed(2));
	
function orderItems() {
	alert("Your order is received.");
}