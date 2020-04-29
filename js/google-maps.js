


    
    function initMap() {
      var locationMinneapolis = {lat: 44.948509, lng: -93.287864};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: locationMinneapolis,
        gestureHandling: 'cooperative'
      });
      var marker = new google.maps.Marker({
        position: locationMinneapolis,
        map: map,
        title: 'Hello World!'
      });
    }











