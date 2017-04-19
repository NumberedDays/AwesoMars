document.addEventListener('DOMContentLoaded', function () {

            L.mapbox.accessToken = 'pk.eyJ1IjoibnVtYmVyZWRkYXlzIiwiYSI6ImNpeTI0NmFuaDAwMTcycXBnZGZyaDJ1dGIifQ.fAD0O4m-jkeVUz_xZwNfpg';

            // Replace 'mapbox.streets' with your map id.

            var mapboxTiles = L.tileLayer('https://api.mapbox.com/v4/mapbox.mars-satellite/{z}/{x}/{y}.png?access_token=' + L.mapbox.accessToken, {
                attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            });

            var map = L.map('map')
                .addLayer(mapboxTiles)
                .setView([42.3610, -71.0587], 8);

        }