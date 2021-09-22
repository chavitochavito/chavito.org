// JavaScript Document
function initMap() {
	// Styles a map in night mode.


	// const myLatLng = {
	// 	lat: -23.656005093238136,
	// 	lng: -46.53586545107741
	// };

	// var map = new google.maps.Map(document.getElementById('map'), {
	// 	center: {
	// 		lat: -23.656005093238136,
	// 		lng: -46.53586545107741
	// 	},
	// 	zoom: 3.2,
	// 	disableDefaultUI: true,
	// 	styles: [
	// 		{
	// 			"featureType": "all",
	// 			"elementType": "labels.text.fill",
	// 			"stylers": [
	// 				{
	// 					"saturation": 36
	// 						},
	// 				{
	// 					"color": "#000000"
	// 						},
	// 				{
	// 					"lightness": 40
	// 						}
	// 					]
	// 				},
	// 		{
	// 			"featureType": "all",
	// 			"elementType": "labels.text.stroke",
	// 			"stylers": [
	// 				{
	// 					"visibility": "on"
	// 						},
	// 				{
	// 					"color": "#000000"
	// 						},
	// 				{
	// 					"lightness": 16
	// 						}
	// 					]
	// 				},
	// 		{
	// 			"featureType": "all",
	// 			"elementType": "labels.icon",
	// 			"stylers": [
	// 				{
	// 					"visibility": "off"
	// 						}
	// 					]
	// 				},
	// 		{
	// 			"featureType": "administrative",
	// 			"elementType": "geometry.fill",
	// 			"stylers": [
	// 				{
	// 					"color": "#000000"
	// 						},
	// 				{
	// 					"lightness": 20
	// 						}
	// 					]
	// 				},
	// 		{
	// 			"featureType": "administrative",
	// 			"elementType": "geometry.stroke",
	// 			"stylers": [
	// 				{
	// 					"color": "#000000"
	// 						},
	// 				{
	// 					"lightness": 17
	// 						},
	// 				{
	// 					"weight": 1.2
	// 						}
	// 					]
	// 				},
	// 		{
	// 			"featureType": "landscape",
	// 			"elementType": "geometry",
	// 			"stylers": [
	// 				{
	// 					"color": "#000000"
	// 						},
	// 				{
	// 					"lightness": 20
	// 						}
	// 					]
	// 				},
	// 		{
	// 			"featureType": "poi",
	// 			"elementType": "geometry",
	// 			"stylers": [
	// 				{
	// 					"color": "#000000"
	// 						},
	// 				{
	// 					"lightness": 21
	// 						}
	// 					]
	// 				},
	// 		{
	// 			"featureType": "road.highway",
	// 			"elementType": "geometry.fill",
	// 			"stylers": [
	// 				{
	// 					"color": "#000000"
	// 						},
	// 				{
	// 					"lightness": 17
	// 						}
	// 					]
	// 				},
	// 		{
	// 			"featureType": "road.highway",
	// 			"elementType": "geometry.stroke",
	// 			"stylers": [
	// 				{
	// 					"color": "#000000"
	// 						},
	// 				{
	// 					"lightness": 29
	// 						},
	// 				{
	// 					"weight": 0.2
	// 						}
	// 					]
	// 				},
	// 		{
	// 			"featureType": "road.arterial",
	// 			"elementType": "geometry",
	// 			"stylers": [
	// 				{
	// 					"color": "#000000"
	// 						},
	// 				{
	// 					"lightness": 18
	// 						}
	// 					]
	// 				},
	// 		{
	// 			"featureType": "road.local",
	// 			"elementType": "geometry",
	// 			"stylers": [
	// 				{
	// 					"color": "#000000"
	// 						},
	// 				{
	// 					"lightness": 16
	// 						}
	// 					]
	// 				},
	// 		{
	// 			"featureType": "transit",
	// 			"elementType": "geometry",
	// 			"stylers": [
	// 				{
	// 					"color": "#000000"
	// 						},
	// 				{
	// 					"lightness": 19
	// 						}
	// 					]
	// 				},
	// 		{
	// 			"featureType": "water",
	// 			"elementType": "geometry",
	// 			"stylers": [
	// 				{
	// 					"color": "#000000"
	// 						},
	// 				{
	// 					"lightness": 17
	// 						}
	// 					]
	// 				}
	// 			]

	// });
	// new google.maps.Marker({
	// 	position: myLatLng,
	// 	map,
	// 	title: "Salsanova",
	// });

	var locations = [
		['AC', -8.77, -70.55, 1],
		['AL', -9.71, -35.73, 1],
		['AM', -3.07, -61.66, 1],
		['AP',  1.41, -51.77, 1],
		['BA',-12.96, -38.51, 1],
		['CE', -3.71, -38.54, 1],
		['DF',-15.83, -47.86, 1],
		['ES',-19.19, -40.34, 1],
		['GO',-16.64, -49.31, 1],
		['MA', -2.55, -44.30, 1],
		['MT',-12.64, -55.42, 1],
		['MS',-20.51, -54.54, 1],
		['MG',-18.10, -44.38, 1],
		['PA', -5.53, -52.29, 1],
		['PB', -7.06, -35.55, 1],
		['PR',-24.89, -51.55, 1],
		['PE', -8.28, -35.07, 1],
		['PI', -8.28, -43.68, 1],
		['RJ',-22.84, -43.15, 1],
		['RN', -5.22, -36.52, 1],
		['RO',-11.22, -62.80, 1],
		['RS',-30.01, -51.22, 1],
		['RR',  1.89, -61.22, 1],
		['SC',-27.33, -49.44, 1],
		['SE',-10.90, -37.07, 1],
		['SP',-23.55, -46.64, 1],
		['TO',-10.25, -48.25, 1],
		['Bondi Beach', -33.890542, 151.274856, 4],
		['Coogee Beach', -33.923036, 151.259052, 5],
		['Cronulla Beach', -34.028249, 151.157507, 3],
		['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
		['Maroubra Beach', -33.950198, 151.259302, 1]
	  ];
  
	  
	
	










	  var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 3,
		disableDefaultUI: true,
	center: new google.maps.LatLng(-23.656005093238136, -46.53586545107741),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]

	  });
  
	  var infowindow = new google.maps.InfoWindow();
  
	  var marker, i;
  
	  for (i = 0; i < locations.length; i++) {  
		marker = new google.maps.Marker({
		  position: new google.maps.LatLng(locations[i][1], locations[i][2]),
		  icon: 'pin.png',
		  map: map
		});
  
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
		  return function() {
			infowindow.setContent(locations[i][0]);
			infowindow.open(map, marker);
		  }
		})(marker, i));
	  }	
}
initMap();
