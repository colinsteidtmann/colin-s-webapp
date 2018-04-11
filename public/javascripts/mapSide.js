function initMap(){
      // Map options
      var options = {
        zoom:11, 
        center:{lat:33.255871,lng:-116.375015},
      }



      //New map
      var map = new google.maps.Map(document.getElementById('map'), options);


      //Array of markers
      var markers = [
          {
          coords:{lat:33.244195,lng:-116.370754},
          content:'<button><h1>Hello</h1></button>'
        },
      ];

      //Loop through markers
      for(var i = 0; i < markers.length; i++){
        
        // Add Marker
        addMarker(markers[i]);
      };

      

      //Add Marker Function
      function addMarker(props){
        var marker = new google.maps.Marker({
        position:props.coords,
        map:map,
        // icon:'images/'
      });

        //Check content
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
        content:props.content
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
        }
      }
    }