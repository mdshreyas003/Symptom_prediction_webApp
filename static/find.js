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
function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (let i = 0; i < results.length; i++) {
      const place =  results[i];
      console.log(place)
      const marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
      });
      marker.addListener("click", function () {
        const url = "https://www.google.com/maps/search/?api=1&query=" + place.name;
        window.open(url, '_blank');
      });
    }
  }
}



getLocation("doctor in sangli and budhgoan");