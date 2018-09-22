function myMap() {
    var mapCanvas=document.getElementById('map')
    var myCenter= new google.maps.LatLng(28.488244,77.519301)
    var mapOptions={center:myCenter,zoom:15}
    var map= new google.maps.Map(mapCanvas,mapOptions)
    var marker = new google.maps.Marker({position: myCenter});
    marker.setMap(map)
  }
// function myMap() {
//   var myCenter = new google.maps.LatLng(28.488244,77.519301)
//   var mapCanvas = document.getElementById("map")
//   var mapOptions = {center: myCenter, zoom: 17}
//   var map = new google.maps.Map(mapCanvas, mapOptions)
//   var marker = new google.maps.Marker({position:myCenter})
//   marker.setMap(map)
// }
