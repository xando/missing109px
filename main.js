$(function(){
    var repeatOnXAxis = false;
    var blankTilePath = false;
    var maxZoom = 7;


    window.onload = function() {

	var customMapType = new google.maps.ImageMapType({
	    getTileUrl: function(coord, zoom) {
		var normalizedCoord = (function(coord, zoom) {return coord })(coord, zoom)
		if(normalizedCoord
		   && (normalizedCoord.x < Math.pow(2, zoom))
		   && (normalizedCoord.x > -1)
		   && (normalizedCoord.y < Math.pow(2, zoom))
		   && (normalizedCoord.y > -1)) {
		    return 'tiles/' + zoom + '_'
			+ normalizedCoord.x
			+ '_' + normalizedCoord.y
			+ '.jpg';
		} else {
		    return blankTilePath;
		}
	    },
	    tileSize: new google.maps.Size(256, 256),
	    maxZoom: maxZoom,
	    name: 'Champagne in the park'
	});

	var myOptions = {
	    center: new google.maps.LatLng(0,0),
	    zoom: 3,
	    minZoom: 2,
	    streetViewControl: false,
	    mapTypeControl: false,
	    mapTypeControlOptions: {
		mapTypeIds: ["custom"]
	    }
	};

	var map = new google.maps.Map(document.getElementById('map'), myOptions);

	map.mapTypes.set('custom', customMapType);
	map.setMapTypeId('custom');
    };
});
