Package.describe({
    name: "bdunnette:leaflet-draw",
    summary: "Adds support for drawing and editing vectors and markers on Leaflet maps",
    version: "1.0.5",
    git: "https://github.com/bdunnette/meteor-leaflet-draw.git"
});

Package.onUse(function (api) {
    api.use('bevanhunt:leaflet@0.3.18', 'client');
    api.addFiles([
        'lib/leaflet.draw.js',
        'leaflet.draw.css',
        'images/spritesheet.png',
        'images/spritesheet-2x.png'
    ], 'client');
});
