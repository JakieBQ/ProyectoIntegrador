function myMapa() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(30.386595, -107.884339),
        zoom: 16
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}