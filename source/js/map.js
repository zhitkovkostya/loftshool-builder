$(document).ready(function initMap() {
	var mapDiv = document.getElementById('m-map');
	var map = new google.maps.Map(mapDiv, {
		center: {lat: 59.947, lng: 30.320},
		zoom: 15,
		scrollwheel: false,
		disableDefaultUI: true,
		navigationControl: false,
		mapTypeControl: false,
		scaleControl: false,
		draggable: false,
		styles: [
			{
				"featureType": "administrative",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#444444"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "all",
				"stylers": [
					{
						"color": "#f2f2f2"
					}
				]
			},
			{
				"featureType": "landscape.natural.landcover",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "landscape.natural.landcover",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "poi.attraction",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "poi.attraction",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "poi.business",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"hue": "#002eff"
					},
					{
						"weight": "6.16"
					}
				]
			},
			{
				"featureType": "poi.business",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"hue": "#00ffb9"
					}
				]
			},
			{
				"featureType": "poi.business",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"hue": "#ff0900"
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "poi.business",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"hue": "#ff0000"
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "poi.business",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"hue": "#ff00b0"
					}
				]
			},
			{
				"featureType": "poi.medical",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "poi.school",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "poi.sports_complex",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 45
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "all",
				"stylers": [
					{
						"color": "#4369aa"
					},
					{
						"visibility": "on"
					}
				]
			}
		]
	});
});