/**
 * Copyright 2013 Scott de Jonge
 *
 * @version 0.1.1
 * @url beta.accessmap.com.au
 *
 */

Mousetrap.bind(['command+f', 'ctrl+f'], function(e) {
    document.getElementById('search-input').focus();
    return false;
});

// Home Control
function HomeControl(controlDiv, map) {
	controlDiv.style.padding = '10px 10px 0px 0px';
	var controlUI = document.createElement('div');
		controlUI.style.backgroundColor = '#43454B';
		controlUI.style.borderStyle = '';
		controlUI.style.borderWidth = '';
		controlUI.style.cursor = 'pointer';
		controlUI.style.textAlign = 'center';
		controlUI.title = 'Click to Zoom In';
		controlDiv.appendChild(controlUI);
	var controlText = document.createElement('div');
		controlText.style.fontFamily = 'Arial,sans-serif';
		controlText.style.fontSize = '20px';
		controlText.style.padding = '10px';
		controlText.style.color = '#FFFFFF';
		controlText.innerHTML = '<i class=" icon-location"></i>';
		controlUI.appendChild(controlText);
	google.maps.event.addDomListener(controlUI, 'click', function() {
		console.log('Home Control');
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				var position = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				console.log(position);
				map.panTo(position);
			});
		} else { 
			handleNoGeolocation(false); 
		}
	});
}

// Zoom In Control
function ZoomInControl(controlDiv, map) {
	controlDiv.style.padding = '10px 0px 0px 0px';
	var controlUI = document.createElement('div');
		controlUI.style.backgroundColor = '#43454B';
		controlUI.style.borderStyle = '';
		controlUI.style.borderWidth = '';
		controlUI.style.cursor = 'pointer';
		controlUI.style.textAlign = 'center';
		controlUI.title = 'Click to Zoom In';
		controlDiv.appendChild(controlUI);
	var controlText = document.createElement('div');
		controlText.style.fontFamily = 'Arial,sans-serif';
		controlText.style.fontSize = '20px';
		controlText.style.padding = '10px';
		controlText.style.color = '#FFFFFF';
		controlText.innerHTML = '<i class=" icon-plus"></i>';
		controlUI.appendChild(controlText);
	google.maps.event.addDomListener(controlUI, 'click', function() {
		console.log('Zoom In Control');
		var newZoom = map.getZoom() + 1; 
		map.setZoom(newZoom); 
	});
}

// Zoom Out Control
function ZoomOutControl(controlDiv, map) {
	controlDiv.style.padding = '10px 0px 0px 0px';
	var controlUI = document.createElement('div');
		controlUI.style.backgroundColor = '#43454B';
		controlUI.style.borderStyle = '';
		controlUI.style.borderWidth = '';
		controlUI.style.cursor = 'pointer';
		controlUI.style.textAlign = 'center';
		controlUI.title = 'Click to Zoom In';
		controlDiv.appendChild(controlUI);
	var controlText = document.createElement('div');
		controlText.style.fontFamily = 'Arial,sans-serif';
		controlText.style.fontSize = '20px';
		controlText.style.padding = '10px';
		controlText.style.color = '#FFFFFF';
		controlText.innerHTML = '<i class=" icon-minus"></i>';
		controlUI.appendChild(controlText);
	google.maps.event.addDomListener(controlUI, 'click', function() {
		console.log('Zoom OUt Control');
		var newZoom = map.getZoom() - 1; 
		map.setZoom(newZoom); 
	});
}

var typeArray = [
	{ 'type': 'accounting', 'color': '#333399' },
	{ 'type': 'airport', 'color': '#333399' },
	{ 'type': 'amusement_park', 'color': '#333399' },
	{ 'type': 'aquarium', 'color': '#333399' },
	{ 'type': 'art_gallery', 'color': '#333399' },
	{ 'type': 'atm', 'color': '#333399' },
	{ 'type': 'bakery', 'color': '#333399' },
	{ 'type': 'bank', 'color': '#333399' },
	{ 'type': 'bar', 'color': '#B22B76' },
	{ 'type': 'beauty_salon', 'color': '#333399' },
	{ 'type': 'bicycle_store', 'color': '#EA8442' },
	{ 'type': 'book_store', 'color': '#EA8442' },
	{ 'type': 'bowling_alley', 'color': '#333399' },
	{ 'type': 'bus_station', 'color': '#333399' },
	{ 'type': 'cafe', 'color': '#B22B76' },
	{ 'type': 'campground', 'color': '#333399' },
	{ 'type': 'car_dealer', 'color': '#333399' },
	{ 'type': 'car_rental', 'color': '#333399' },
	{ 'type': 'car_repair', 'color': '#333399' },
	{ 'type': 'car_wash', 'color': '#333399' },
	{ 'type': 'casino', 'color': '#333399' },
	{ 'type': 'cemetery', 'color': '#333399' },
	{ 'type': 'church', 'color': '#333399' },
	{ 'type': 'city_hall', 'color': '#333399' },
	{ 'type': 'clothing_store', 'color': '#EA8442' },
	{ 'type': 'convenience_store', 'color': '#EA8442' },
	{ 'type': 'courthouse', 'color': '#333399' },
	{ 'type': 'dentist', 'color': '#333399' },
	{ 'type': 'department_store', 'color': '#EA8442' },
	{ 'type': 'doctor', 'color': '#333399' },
	{ 'type': 'electrician', 'color': '#333399' },
	{ 'type': 'electronics_store', 'color': '#EA8442' },
	{ 'type': 'embassy', 'color': '#333399' },
	{ 'type': 'establishment', 'color': '#333399' },
	{ 'type': 'finance', 'color': '#333399' },
	{ 'type': 'fire_station', 'color': '#333399' },
	{ 'type': 'florist', 'color': '#333399' },
	{ 'type': 'food', 'color': '#333399' },
	{ 'type': 'funeral_home', 'color': '#333399' },
	{ 'type': 'furniture_store', 'color': '#EA8442' },
	{ 'type': 'gas_station', 'color': '#333399' },
	{ 'type': 'general_contractor', 'color': '#333399' },
	{ 'type': 'grocery_or_supermarket', 'color': '#333399' },
	{ 'type': 'gym', 'color': '#333399' },
	{ 'type': 'hair_care', 'color': '#333399' },
	{ 'type': 'hardware_store', 'color': '#EA8442' },
	{ 'type': 'health', 'color': '#333399' },
	{ 'type': 'hindu_temple', 'color': '#333399' },
	{ 'type': 'home_goods_store', 'color': '#EA8442' },
	{ 'type': 'hospital', 'color': '#333399' },
	{ 'type': 'insurance_agency', 'color': '#333399' },
	{ 'type': 'jewelry_store', 'color': '#EA8442' },
	{ 'type': 'laundry', 'color': '#333399' },
	{ 'type': 'lawyer', 'color': '#333399' },
	{ 'type': 'library', 'color': '#333399' },
	{ 'type': 'liquor_store', 'color': '#EA8442' },
	{ 'type': 'local_government_office', 'color': '#333399' },
	{ 'type': 'locksmith', 'color': '#333399' },
	{ 'type': 'lodging', 'color': '#E84C2D' },
	{ 'type': 'meal_delivery', 'color': '#333399' },
	{ 'type': 'meal_takeaway', 'color': '#C91409' },
	{ 'type': 'mosque', 'color': '#333399' },
	{ 'type': 'movie_rental', 'color': '#333399' },
	{ 'type': 'movie_theater', 'color': '#333399' },
	{ 'type': 'moving_company', 'color': '#333399' },
	{ 'type': 'museum', 'color': '#333399' },
	{ 'type': 'night_club', 'color': '#B22B76' },
	{ 'type': 'painter', 'color': '#333399' },
	{ 'type': 'park', 'color': '#A6BC59' },
	{ 'type': 'parking', 'color': '#285AAE' },
	{ 'type': 'pet_store', 'color': '#EA8442' },
	{ 'type': 'pharmacy', 'color': '#333399' },
	{ 'type': 'physiotherapist', 'color': '#333399' },
	{ 'type': 'place_of_worship', 'color': '#333399' },
	{ 'type': 'plumber', 'color': '#333399' },
	{ 'type': 'police', 'color': '#333399' },
	{ 'type': 'post_office', 'color': '#333399' },
	{ 'type': 'real_estate_agency', 'color': '#333399' },
	{ 'type': 'restaurant', 'color': '#333399' },
	{ 'type': 'roofing_contractor', 'color': '#333399' },
	{ 'type': 'rv_park', 'color': '#333399' },
	{ 'type': 'school', 'color': '#EDB356' },
	{ 'type': 'shoe_store', 'color': '#EA8442' },
	{ 'type': 'shopping_mall', 'color': '#333399' },
	{ 'type': 'spa', 'color': '#333399' },
	{ 'type': 'stadium', 'color': '#EED163' },
	{ 'type': 'storage', 'color': '#333399' },
	{ 'type': 'store', 'color': '#EA8442' },
	{ 'type': 'subway_station', 'color': '#333399' },
	{ 'type': 'synagogue', 'color': '#333399' },
	{ 'type': 'taxi_stand', 'color': '#333399' },
	{ 'type': 'train_station', 'color': '#333399' },
	{ 'type': 'travel_agency', 'color': '#333399' },
	{ 'type': 'university', 'color': '#EDB356' },
	{ 'type': 'veterinary_care', 'color': '#333399' },
	{ 'type': 'zoo', 'color': '#333399' },
	{ 'type': 'locality', 'color': '#C9574D' }
];

// Find Color
function findTypeColor(type) {
	for (var i = 0; i < typeArray.length; i++) {
		if(typeArray[i].type == type) {
			return typeArray[i].color;
			console.log(typeArray[i].color);
		}
	}
}

// Global Variables
var map;
var mapBounds;
var markers = [];
var sidebar = document.getElementById('sidebar');

function initialize() {
	
	var me = new google.maps.LatLng(-27.5001674, 153.0151598);
	
	// Get User Location
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(createMap, function() {
			handleNoGeolocation(true);
		});
	} else {
		browserSupportFlag = false;
		handleNoGeolocation(browserSupportFlag);
	}
	
	// Create Map at User Position
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
		service = new google.maps.places.PlacesService(map);
		
		// Home Control
		var homeControlDiv = document.createElement('DIV');
		var homeControl = new HomeControl(homeControlDiv, map);
		homeControlDiv.index = 1;
		map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);
		
		// Zoom Out Control
		var zoomOutControlDiv = document.createElement('DIV');
		var zoomOutControl = new ZoomOutControl(zoomOutControlDiv, map);
		zoomOutControlDiv.index = 1;
		map.controls[google.maps.ControlPosition.TOP_RIGHT].push(zoomOutControlDiv);
		
		// Zoom In Control
		var zoomInControlDiv = document.createElement('DIV');
		var zoomInControl = new ZoomInControl(zoomInControlDiv, map);
		zoomInControlDiv.index = 1;
		map.controls[google.maps.ControlPosition.TOP_RIGHT].push(zoomInControlDiv);
	
		// Create InfoWindow
		var infowindow = new google.maps.InfoWindow();
		
		// Define Map Bounds
		var viewportBox;
		google.maps.event.addListener(map, 'idle', function(event) {
			//clearMarkers();
			var bounds = map.getBounds();
			var NE = bounds.getNorthEast();
			var SW = bounds.getSouthWest();
			
			var viewportPoints = [ NE, new google.maps.LatLng(NE.lat(), SW.lng()), SW, new google.maps.LatLng(SW.lat(), NE.lng()), NE ];
			
			if (viewportBox) {
				viewportBox.setPath(viewportPoints);
			} else {
				viewportBox = new google.maps.Polyline({
					path: viewportPoints,
					strokeColor: '#333399',
					strokeOpacity: 1.0,
					strokeWeight: 4 
				});
				viewportBox.setMap(map);
			};
			
			var info = document.getElementById('info');
			
			//getPlacesFromBounds();
			
		});
		
		// Search Places
		var searchInput = (document.getElementById('search-input'));
		var searchBox = new google.maps.places.SearchBox(searchInput);
		google.maps.event.addListener(searchBox, 'places_changed', function() {
			clearMarkers();
			$('#loading').show();
			var places = searchBox.getPlaces();
			var bounds = map.getBounds();
			for (var i = 0; i < places.length; i++) {
				drawMarker(places[i]);
				$('#loading').hide();
			}
			map.fitBounds(bounds);
		});

		// Bounds Change Event
		google.maps.event.addListener(map, 'bounds_changed', function() {
			var bounds = map.getBounds();
			//console.log('Getting Map Bounds' + bounds);
			searchBox.setBounds(bounds);
		});
		
		// Places API Request
		function getPlacesFromBounds() {
			var bounds = map.getBounds();
			var request = {
				bounds: bounds,
				radius: '500'
			};
			$('#loading').show();
			service.nearbySearch(request, createMarkers);
		}
		
		// Clear Markers
		function clearMarkers() {
			for (var i = 0; i < markers.length; i++ ) {
				// Remove Marker
				markers[i].setMap(null);			
			}
			markers = [];
		}
		
		// Create Markers
		function createMarkers(results, status) {
			if (status == google.maps.places.PlacesServiceStatus.OK) {
				for (var i = 0; i < results.length; i++) {
					var place = results[i];
					drawMarker(results[i]);
					$('#loading').hide();
				}
			}
		}
				
		// Draw Markers
		function drawMarker(place) {
			var bounds = map.getBounds();
			var color = findTypeColor(place.types[0]);
			
			// Closed Icon Shape
			var iconClosed = {
				path: 'M 100 0 L 0 0 L 0 100 L 35 100 L 50 120 L 65 100 L 100 100 Z',
				fillColor: color,
				fillOpacity: 1,
				strokeColor: '',
				strokeWeight: 0,
				scale: 1/2
			}
			
			// Open Icon Shape
			var iconOpen = {
				path: 'M 100 0 L 0 0 L 0 0 L 0 100 L 0 100 L 35 100 L 50 120 L 65 100 L 100 100 L 450 100 L 450 0 Z',
				fillColor: color,
				fillOpacity: 1,
				strokeColor: '',
				strokeWeight: 0,
				scale: 1/2
			}
			
			// Create Marker
			var marker = new Marker({
				map: map,
				title: place.name,
				position: place.geometry.location,
				zIndex: 9,
				icon: iconClosed,
				label: '<i class="icon-' + place.types[0] + '"></i>'
			});
			
			// Marker Hover Over
			google.maps.event.addListener(marker, 'mouseover', function() {
				console.log('Hovering ' + place.name );
				marker.setIcon(iconOpen);
				///marker.setZIndex(9999);
				//marker.set('label', place.name);
			});
			
			// Marker Hover Out
			google.maps.event.addListener(marker, 'mouseout', function() {
				marker.setIcon(iconClosed);
				//marker.setValues('label', '<i class="icon-' + place.types[0] + '"></i>');
			});
			
			// Marker Click
			google.maps.event.addListener(marker, 'click', function() {
				console.log(place.name  + ' Marker Clicked');
				var contentString =
				'<div class="location" data-id="' + place.id + '">' +
					'<div class="icon" style="background:' + color + ';"><i class="icon-' + place.types[0] + '"></i></div>' +
					'<h1>' + place.name + '</h1>' +
					'<p>' + place.types[0].replace(/_/g, ' ') + '</p>' +
					'<p>' + place.formatted_address + '</p>' +
					'<p>' + place.formatted_phone_number + '</p>' +
					'<p>' + place.rating + '</p>' +
					'<p>' + place.website + '</p>' +
					'<form>' +
						'<label for="comment">Comment</label>' +
						'<textarea type="text" name="comment" id="comment"></textarea>' +
						'<input type="submit">' +
					'</form>'
				'</div>';
				//sidebar.className = 'slide-right';
				sidebar.innerHTML = '';
				sidebar.innerHTML = contentString;
			});
			
			markers.push(marker);
			bounds.extend(place.geometry.location);
		}
	}

	// Custom Marker
	var Marker = function(options) {
		google.maps.Marker.apply(this, arguments);
		if (options.label) {
			this.MarkerLabel = new MarkerLabel({
				map: this.map,
				marker: this,
				text: options.label
			});
			this.MarkerLabel.bindTo('position', this, 'position');
		}
	};
	
	// Create Custom Marker Object
	Marker.prototype = new google.maps.Marker();
	
	// Custom Marker SetMap
	Marker.prototype.setMap = function() {
		google.maps.Marker.prototype.setMap.apply(this, arguments);
		(this.MarkerLabel) && this.MarkerLabel.setMap.apply(this.MarkerLabel, arguments);
	};
	 
	// Marker Label Overlay
	var MarkerLabel = function(options) {
		var self = this;
		this.setValues(options);
		
		// Create the label container
		this.div = document.createElement('div');
		this.div.className = 'marker-label';
		var span = document.createElement('span');
		span.className = "marker-icon";
		this.div.appendChild(span);
	 
		// Trigger the marker click handler if clicking on the label
		google.maps.event.addDomListener(this.div, 'click', function(e){
			(e.stopPropagation) && e.stopPropagation();
			google.maps.event.trigger(self.marker, 'click');
		});
	};
	
	// Create MarkerLabel Object
	MarkerLabel.prototype = new google.maps.OverlayView;
	
	// Marker Label onAdd
	MarkerLabel.prototype.onAdd = function() {
	     var pane = this.getPanes().overlayImage.appendChild(this.div);
	     var self = this;
	     this.listeners = [
	          google.maps.event.addListener(this, 'position_changed', function() { self.draw(); }),
	          google.maps.event.addListener(this, 'text_changed', function() { self.draw(); }),
	          google.maps.event.addListener(this, 'zindex_changed', function() { self.draw(); })
	     ];
	};
	 
	// Marker Label onRemove
	MarkerLabel.prototype.onRemove = function() {
	     this.div.parentNode.removeChild(this.div);
	     for (var i = 0, I = this.listeners.length; i < I; ++i) {
	          google.maps.event.removeListener(this.listeners[i]);
	     }
	};
	 
	// Implement draw
	MarkerLabel.prototype.draw = function() {
	     var projection = this.getProjection();
	     var position = projection.fromLatLngToDivPixel(this.get('position'));
	     var div = this.div;
	     div.style.left = position.x + 'px';
	     div.style.top = position.y + 'px';
	     div.style.display = 'block';
	     div.style.zIndex = this.get('zIndex'); //ALLOW LABEL TO OVERLAY MARKER
	     this.div.innerHTML = this.get('text').toString();
	};
}


function loadScript() {
	// Google Maps API
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&sensor=true&' + 'callback=initialize';
	document.body.appendChild(script);
}

window.onload = loadScript;