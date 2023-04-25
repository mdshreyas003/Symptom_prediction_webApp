let map;
let lat,lng,search;

async function getLocation(query) {
  search=query;
  console.log(query)
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

async function showPosition(position,query) {
  lat=position.coords.latitude;
  lng=position.coords.longitude;
  console.log(lat,lng)
  const { Map } = await google.maps.importLibrary("maps");
  
  map = new Map(document.getElementById("map"), {
    center: { lat: lat, lng: lng },
    zoom: 12,
  });
  var location = new google.maps.LatLng(lat,lng);
  var request = {
    location: location,
    radius: '500',
    query: search,
    fields: ["name", "geometry"]
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}
function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] < b[prop]) {    
            return 1;    
        } else if (a[prop] > b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}
function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    document.getElementById("drlist").innerHTML='';
    results.sort(GetSortOrder("user_ratings_total"))
    for (let i = 0; i < 5; i++) {
      const place = results[i];
      console.log(place)
      var ele = document.createElement('div');
      ele.innerHTML = `<div class='px-40 py-6' style="display: flex; justify-content: space-between;">        
      <div >
          <h3 style="font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">${place.name}</h3>
          
              No reviews . Doctor <br>
              ${place.formatted_address}<br>
              <span style="color:red;">Ratings: ${place.rating} </span>| Users visited: ${place.user_ratings_total}
          
      </div>   
      <a href="https://www.google.com/maps/place/?q=place_id:${place.place_id}" target="_blank">
          <img style="height:70px; margin-right: 100px;" src="https://img.icons8.com/doodle/256/turn-sign.png"/>
      </a></div>
      <hr>`

      document.getElementById("drlist").appendChild(ele);


    }
  }
}

// getLocation("doctor in sangli")