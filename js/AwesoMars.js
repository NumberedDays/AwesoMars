document.addEventListener('DOMContentLoaded', function () {

// Replace 'mapbox.streets' with your map id.

//    var mapboxTiles = L.tileLayer('https://api.mapbox.com/v4/mapbox.mars-satellite/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibnVtYmVyZWRkYXlzIiwiYSI6ImNpeTI0NmFuaDAwMTcycXBnZGZyaDJ1dGIifQ.fAD0O4m-jkeVUz_xZwNfpg', {
//        attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//    });
//
//    var map = L.map('map')
//        .addLayer(mapboxTiles)
//        .setView([42.3610, -71.0587], 8);
    
    /* create new Proj4Leaflet CRS:
  1. Proj4 and WKT definitions can be found at sites like http://epsg.io, http://spatialreference.org/ or by using gdalsrsinfo http://www.gdal.org/gdalsrsinfo.html
  2. Appropriate values to supply to the resolution and origin constructor options can be found in the ArcGIS Server tile server REST endpoint (ex: https://tiles.arcgis.com/tiles/qHLhLQrcvEnxjtPr/arcgis/rest/services/OS_Open_Background_2/MapServer).
  3. The numeric code within the first parameter (ex: `27700`) will be used to project the dynamic map layer on the fly
  */
  var crs = new L.Proj.CRS('IAU2000:49913', '+proj=eqc +lat_ts=0 +lat_0=0 +lon_0=180 +x_0=0 +y_0=0 +a=3396190 +b=3396190 +units=m +no_defs', {
      origin: [3396190.0, 169.89444722361179]
  });

  var map = L.map('map', {
      crs: crs
  });

  //var url = "https://webgis2.wr.usgs.gov/ArcGIS/rest/services/Mars_global_gis/MapServer"
//
    var base = L.esri.rasterLayer({
        url: 'https://webgis2.wr.usgs.gov/ArcGIS/rest/services/Mars_global_gis/MapServer/56'
    }).addTo(map);
    
//    L.esri.FeatureLayer({
//        url: 'https://webgis2.wr.usgs.gov/ArcGIS/rest/services/Mars_color/MapServer/0'
//    }).addTo(map);
        
//L.tileLayer('https://api.mapbox.com/styles/v1/numbereddays/ciycbt29r007o2snp342kaxbv/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibnVtYmVyZWRkYXlzIiwiYSI6ImNpeTI0NmFuaDAwMTcycXBnZGZyaDJ1dGIifQ.fAD0O4m-jkeVUz_xZwNfpg', {
//    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//    maxZoom: 18
//}).addTo(map);
//
//L.esri.dynamicMapLayer({
//    url: "https://mapservices.nps.gov/arcgis/rest/services/LandResourcesDivisionTractAndBoundaryService/MapServer",
//    opacity: 0.2
//}).addTo(map);

//    
//    L.tiledLayer('https://webgis2.wr.usgs.gov/arcgis/rest/services/Mars_color/MapServer')
//    }).addTo(map);
//

});