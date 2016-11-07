Package.describe({
    name: "twiddau:leaflet-draw",
    summary: "Adds support for drawing and editing vectors and markers on Leaflet maps",
    version: "0.4.1-0",
    git: "https://github.com/twiddau/meteor-leaflet-draw.git"
});

Package.onUse(function(api) {
    api.use('bevanhunt:leaflet@3.0.1', 'client');
    api.addFiles([
        'lib/leaflet.draw.js',
        'leaflet.draw.css'
    ], 'client');
    api.addAssets([
        'images/spritesheet.png',
        'images/spritesheet-2x.png',
		'images/spritesheet.svg'
    ], 'client');
});
