document.addEventListener('DOMContentLoaded', function () {

    // Replace 'mapbox.streets' with your map id.

    var mapboxTiles = L.tileLayer('https://api.mapbox.com/v4/mapbox.mars-satellite/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibnVtYmVyZWRkYXlzIiwiYSI6ImNpeTI0NmFuaDAwMTcycXBnZGZyaDJ1dGIifQ.fAD0O4m-jkeVUz_xZwNfpg', {
        attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    var map = L.map('map')
        .addLayer(mapboxTiles)
        .setView([42.3610, -71.0587], 8);

//    var map = L.map('map');
//
//    var service = L.esri.mapService({
//        url: 'https://utility.arcgisonline.com/arcgis/rest/services/Geometry/GeometryServer/project'
//    }).addTo(map);
//
//
//    var landingSites = L.esri.featureLayer({
//        url: 'https://webgis2.wr.usgs.gov/ArcGIS/rest/services/Mars_color/MapServer/0'
//    }).addTo(map);


});