// Initialize the platform object:
var platform = new H.service.Platform({
    'apikey': 'QSS-K3x-awMzbjLi2yg2hO9VOnk9kjK0FV7UHlOHW-Q'
});

// Obtain the default map types from the platform object
var maptypes = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
    document.getElementById('mapContainer'),
    maptypes.vector.normal.map,
    {
        zoom: 10,
        center: { lng: 103.851959, lat: 1.290270}
    });