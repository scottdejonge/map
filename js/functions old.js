/*
$(document).ready(function () {
	if ($('div').hasClass('open')) {
		$('div').append('<div class='close'></div>');
	}
});

$(document).on('click','.close',function(){
    $(this).parent().remove();
});
*/

var typeArray = { 'types': [
	{ 'type': 'accounting', 'color': '#FF0000' },
	{ 'type': 'airport', 'color': '#FF0000' },
	{ 'type': 'amusement_park', 'color': '#FF0000' },
	{ 'type': 'aquarium', 'color': '#FF0000' },
	{ 'type': 'art_gallery', 'color': '#FF0000' },
	{ 'type': 'atm', 'color': '#FF0000' },
	{ 'type': 'bakery', 'color': '#FF0000' },
	{ 'type': 'bank', 'color': '#FF0000' },
	{ 'type': 'bar', 'color': '#FF0000' },
	{ 'type': 'beauty_salon', 'color': '#FF0000' },
	{ 'type': 'bicycle_store', 'color': '#FF0000' },
	{ 'type': 'book_store', 'color': '#FF0000' },
	{ 'type': 'bowling_alley', 'color': '#FF0000' },
	{ 'type': 'bus_station', 'color': '#FF0000' },
	{ 'type': 'cafe', 'color': '#FF0000' },
	{ 'type': 'campground', 'color': '#FF0000' },
	{ 'type': 'car_dealer', 'color': '#FF0000' },
	{ 'type': 'car_rental', 'color': '#FF0000' },
	{ 'type': 'car_repair', 'color': '#FF0000' },
	{ 'type': 'car_wash', 'color': '#FF0000' },
	{ 'type': 'casino', 'color': '#FF0000' },
	{ 'type': 'cemetery', 'color': '#FF0000' },
	{ 'type': 'church', 'color': '#FF0000' },
	{ 'type': 'city_hall', 'color': '#FF0000' },
	{ 'type': 'clothing_store', 'color': '#FF0000' },
	{ 'type': 'convenience_store', 'color': '#FF0000' },
	{ 'type': 'courthouse', 'color': '#FF0000' },
	{ 'type': 'dentist', 'color': '#FF0000' },
	{ 'type': 'department_store', 'color': '#FF0000' },
	{ 'type': 'doctor', 'color': '#FF0000' },
	{ 'type': 'electrician', 'color': '#FF0000' },
	{ 'type': 'electronics_store	  ', 'color': '#FF0000' },
	{ 'type': 'embassy', 'color': '#FF0000' },
	{ 'type': 'establishment', 'color': '#FF0000' },
	{ 'type': 'finance', 'color': '#FF0000' },
	{ 'type': 'fire_station', 'color': '#FF0000' },
	{ 'type': 'florist', 'color': '#FF0000' },
	{ 'type': 'food', 'color': '#FF0000' },
	{ 'type': 'funeral_home', 'color': '#FF0000' },
	{ 'type': 'furniture_store', 'color': '#FF0000' },
	{ 'type': 'gas_station', 'color': '#FF0000' },
	{ 'type': 'general_contractor', 'color': '#FF0000' },
	{ 'type': 'grocery_or_supermarket', 'color': '#FF0000' },
	{ 'type': 'gym', 'color': '#FF0000' },
	{ 'type': 'hair_care', 'color': '#FF0000' },
	{ 'type': 'hardware_store', 'color': '#FF0000' },
	{ 'type': 'health', 'color': '#FF0000' },
	{ 'type': 'hindu_temple', 'color': '#FF0000' },
	{ 'type': 'home_goods_store', 'color': '#FF0000' },
	{ 'type': 'hospital', 'color': '#FF0000' },
	{ 'type': 'insurance_agency', 'color': '#FF0000' },
	{ 'type': 'jewelry_store', 'color': '#FF0000' },
	{ 'type': 'laundry', 'color': '#FF0000' },
	{ 'type': 'lawyer', 'color': '#FF0000' },
	{ 'type': 'library', 'color': '#FF0000' },
	{ 'type': 'liquor_store', 'color': '#FF0000' },
	{ 'type': 'local_government_office', 'color': '#FF0000' },
	{ 'type': 'locksmith', 'color': '#FF0000' },
	{ 'type': 'lodging', 'color': '#FF0000' },
	{ 'type': 'meal_delivery', 'color': '#FF0000' },
	{ 'type': 'meal_takeaway', 'color': '#FF0000' },
	{ 'type': 'mosque', 'color': '#FF0000' },
	{ 'type': 'movie_rental', 'color': '#FF0000' },
	{ 'type': 'movie_theater', 'color': '#FF0000' },
	{ 'type': 'moving_company', 'color': '#FF0000' },
	{ 'type': 'museum', 'color': '#FF0000' },
	{ 'type': 'night_club', 'color': '#FF0000' },
	{ 'type': 'painter', 'color': '#FF0000' },
	{ 'type': 'park', 'color': '#FF0000' },
	{ 'type': 'parking', 'color': '#FF0000' },
	{ 'type': 'pet_store', 'color': '#FF0000' },
	{ 'type': 'pharmacy', 'color': '#FF0000' },
	{ 'type': 'physiotherapist', 'color': '#FF0000' },
	{ 'type': 'place_of_worship', 'color': '#FF0000' },
	{ 'type': 'plumber', 'color': '#FF0000' },
	{ 'type': 'police', 'color': '#FF0000' },
	{ 'type': 'post_office', 'color': '#FF0000' },
	{ 'type': 'real_estate_agency', 'color': '#FF0000' },
	{ 'type': 'restaurant', 'color': '#FF0000' },
	{ 'type': 'roofing_contractor', 'color': '#FF0000' },
	{ 'type': 'rv_park', 'color': '#FF0000' },
	{ 'type': 'school', 'color': '#FF0000' },
	{ 'type': 'shoe_store', 'color': '#FF0000' },
	{ 'type': 'shopping_mall', 'color': '#FF0000' },
	{ 'type': 'spa', 'color': '#FF0000' },
	{ 'type': 'stadium', 'color': '#FF0000' },
	{ 'type': 'storage', 'color': '#FF0000' },
	{ 'type': 'store', 'color': '#FF0000' },
	{ 'type': 'subway_station', 'color': '#FF0000' },
	{ 'type': 'synagogue', 'color': '#FF0000' },
	{ 'type': 'taxi_stand', 'color': '#FF0000' },
	{ 'type': 'train_station', 'color': '#FF0000' },
	{ 'type': 'travel_agency', 'color': '#FF0000' },
	{ 'type': 'university', 'color': '#FF0000' },
	{ 'type': 'veterinary_care', 'color': '#FF0000' },
	{ 'type': 'zoo', 'color': '#FF0000' }
]};


//console.log(typeArray.types.color);

/*
$.getJSON("types.json", function(data){
    $.each(data, function (index, value) {
        console.log(value);
    });
});
*/

/*
jQuery.get('types.json', function(data) {
    var typesArray = JSON.parse(data);
    console.log(typesArray.types[0].type);
});
*/


function initialize() {
	var userLocation = new google.maps.LatLng();
	var markers = [];
	var service = new google.maps.places.PlacesService(map);
	var browserSupportFlag =  new Boolean();
	var bounds = new google.maps.LatLngBounds();
	var sidebar = document.getElementById('sidebar');
	var brisbane = new google.maps.LatLng(-27.470924772181082, 153.02348971366882);
	
	
	// Get User Location
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(createMap, function() {
			handleNoGeolocation(true);
		});
	} else {
		browserSupportFlag = false;
		handleNoGeolocation(browserSupportFlag);
		userLocation = brisbane;
	}
	
	// Load Map at User Position
	function createMap(position) {	
	    userLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	    
		// Google Map Options		
		var mapOptions = {
			zoom: 16,
			scrollWheel: false,
			center: userLocation,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			mapTypeControl: false,
			panControl: false,
			zoomControl: false,
			scaleControl: false,
			streetViewControl: false,
			styles: [
				{stylers: [{ visibility: 'simplified' }]},
				{elementType: 'labels', stylers: [{ visibility: 'off' }]}
			]
		}
		
		// Create the Map
		map = new google.maps.Map(document.getElementById('map'), mapOptions);
		
		var defaultBounds = new google.maps.LatLngBounds(
			new google.maps.LatLng(-33.8902, 151.1759),
			new google.maps.LatLng(-33.8474, 151.2631));
		map.fitBounds(defaultBounds);
		
		//console.log(userLocation);
		/*
var request = {
			location: brisbane,
			radius: 2000
		};
		service.nearbySearch(request, createMarkers);	
*/	
	}	
	
	// Create Markers
	function createMarkers(places, status) {
		
		if (status == google.maps.places.PlacesServiceStatus.OK) {
			console.log('Creating Markers');
			for (var i = 0, place; place = places[i]; i++) {
				var type = place.types.slice(0,1);
				drawMarker(place);
				bounds.extend(place.geometry.location);
			}
			
			map.fitBounds(bounds);
		}
	}
	
	// Draw Markers
	function drawMarker(place) {
		var marker = new google.maps.Marker({
			map: map,
			title: place.name,
			position: place.geometry.location,
			animation: google.maps.Animation.DROP,
			icon: {
				path: 'M 100 0 L 0 0 L 0 100 L 35 100 L 50 120 L 65 100 L 100 100 Z',
				fillColor: '#FFFF00',
				fillOpacity: 1,
				strokeColor: '',
				strokeWeight: 0,
				scale: 1/2
			}
		});	
	}
	
	
	// Clear Markers
	function clearMarkers() {
		for (var i = 0, marker; marker = markers[i]; i++) {
			marker[i].setMap(null);
		}
		//markers = [];
	}
	
	// Marker Click Event
	google.maps.event.addListener(markers, 'click', function() {
		var request =  {
		   reference: place.reference
		};
		service.getDetails(request, function(place, status) {
			if (status == google.maps.places.PlacesServiceStatus.OK) {
				//console.log('Clicked Marker');
				var contentString =
				'<div class="location" data-id="' + place.id + '">' +
					'<svg xmlns="http://www.w3.org/2000/svg" version="1.1">' +
						'<rect width="50" height="50" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" />' +
					'</svg>' +
					'<h3>' + place.name + '</h3>' +
					'<p>' + place.formatted_address + '</p>' +
					'<p>' + place.formatted_phone_number + '</p>' +
					'<p>' + place.rating + '</p>' +
					'<p>' + place.photos.photo_reference + '</p>' +
					'<img src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=' + 
						place.photos.photo_reference + 
					'&sensor=true&key=AIzaSyDvMzxhWgrrZLHKgb2aztU5iJUc-Xn63Wc" />' +
					'<p>' + place.website + '</p>' +
				'</div>';
				sidebar.className = 'slide-right';
				sidebar.innerHTML = '';
				sidebar.innerHTML = contentString;
			} else { 
				console.log('no data');
			}
		})
	});
	
	
	// Search Results
	var searchBox = new google.maps.places.SearchBox(document.getElementById('search-input'));
	google.maps.event.addListener(searchBox, 'places_changed', function() {
		var places = searchBox.getPlaces();
		
		// Console Log Search Term
		var searchTerm = document.getElementById('search-input').value;
		console.log('Creating ' + searchTerm + ' Markers');
		//sidebar.innerHTML = '';
		//sidebar.className = '';
		
		
		for (var i = 0, marker; marker = markers[i]; i++) {
			marker.setMap(null);
		}
		//clearMarkers();
		/* createMarkers(); */
		//createMarkers(places, status);
		// Create Markers From Places API
		for (var i = 0, place; place = places[i]; i++) {
			var type = place.types.slice(0,1);
			drawMarker(place);
			bounds.extend(place.geometry.location);
		}
		
		map.fitBounds(bounds);
	});
	
	// Bounds Changed
	google.maps.event.addListener(map, 'bounds_changed', function() {
		var bounds = map.getBounds();
		searchBox.setBounds(bounds);
	});
}

function loadScript() {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&sensor=true&' + 'callback=initialize';
	document.body.appendChild(script);
}

window.onload = loadScript;