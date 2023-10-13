

//geo lokation indhentning
const geoOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

navigator.geolocation.getCurrentPosition(success, error, geoOptions);

function success(pos) {
    const crd = pos.coords;

    GeoData(crd.longitude, crd.latitude);
}

function error(err) {
    console.log(err);
}

export function GeoData(myLong, myLat) {

   
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${myLat}&lon=${myLong}&format=json`;

    console.log(apiUrl);

   

    let fetchOptions={
    
    Method: 'GET',
    Body: 'body',
    Cache: 'default',
    
    Headers: {
        'Accept': 'application.json',
        'Content-Type': 'application/json'
    }
    
    };

    fetch(apiUrl,fetchOptions)

    fetch(apiUrl)

    .then((response) => response.json())
    
    .then((data) => {
        console.log('my fetched data:', data);
        return data;
    })
    .catch((error) => {
        console.error('Error:', error);
        
    });
    
    }

  
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    
    // Construct the URL for the weather API
    //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=YOUR_API_KEY`;
  
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode,windspeed_10m,winddirection_10m,uv_index&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,rain_sum,windspeed_10m_max,winddirection_10m_dominant&timezone=Europe%2FBerlin`;

    
    // Fetch the weather data for the user's current location
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
     console.log(data);
    
       

    

    })
    .catch(error => console.error(error));
});