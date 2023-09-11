
// //knap til godkendelse af loaktion. 
// const button = document.querySelector('#geolocation-button');

// // Lyt efter klikhændelse på knappen
// button.addEventListener('click', () => {
//   // Anmod om geolokaliseringsoplysninger
//   navigator.geolocation.getCurrentPosition(position => {
//     // Brug geolokaliseringsoplysningerne til at gøre noget
//     const { latitude, longitude } = position.coords;
//     console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//   }, error => {
//     // Håndter fejl, hvis anmodningen mislykkes
//     console.error(error);
//   });
// });



const myApp = document.getElementById('myApp');

const geoOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

navigator.geolocation.getCurrentPosition(success, error, geoOptions);

function success(pos) {
    const crd = pos.coords;

   console.log( `${crd} Your current position is: Latitude : ${crd.latitude} Longitude: ${crd.longitude} More or less ${crd.accuracy} meters.`);
    getLocationName(crd.longitude, crd.latitude);
}

function error(err) {
    myApp.innerText = `ERROR(${err.code}): ${err.message}`;
}

function getLocationName(myLong, myLat) {

// geo code api https://nominatim  no api key  use this
console.log(myLong, myLat);
const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${myLat}&lon=${myLong}&format=json`;

console.log(apiUrl);

let myResElement = document.createElement('h2');

let fetchOptions={
    
    Method: 'GET',
    Body: 'body',
    Cache: 'default',
    
    Headers: {
        'Accept': 'application.json',
        'Content-Type': 'application/json'
    }
    
};
// fetch(apiUrl,fetchOptions)

    fetch(apiUrl)
    .then((response) => response.json())
    
    .then((data) => {
        //console.log('my fetched data:', data);
        
        myResElement.innerText = `Du er i  ${data.address.municipality} - ${data.address.postcode} ${data.address.city} `;
    })
    .catch((error) => {
        console.error('Error:', error);
        myResElement.innerText = `my error: ${error}`;
    });
    
    //myApp.appendChild(myResElement);
}


// Get the user's current location
navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    
    // Construct the URL for the weather API
    //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=YOUR_API_KEY`;
  
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode,windspeed_10m,winddirection_10m,uv_index&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Europe%2FBerlin`;


    
    // Fetch the weather data for the user's current location
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
    //console.table(data);
    //console.log(data.daily);
    // console.log(data.hourly);

// Extract the weather conditions from the API response



        //solopgang
        console.log(data.daily.sunrise[0]);
        //solnedgang
        console.log(data.daily.sunset[0]);
        //Højeste temperatur på dagen
        console.log(data.daily.temperature_2m_max[0]);
        //Laveste temperatur på dagen
        console.log(data.daily.temperature_2m_min[0]);
        //Vejr typen lige nu og 5 dage frem - kode nummeret der kommer ud skal kobles sammen med WMO som er beskrevet i wiki
        console.log(data.hourly.weathercode[0]); //i dag
        console.log(data.hourly.weathercode[1]); //i morgen
        console.log(data.hourly.weathercode[2]); //3 dage frem
        console.log(data.hourly.weathercode[3]); //4 dage frem
        console.log(data.hourly.weathercode[4]); //5 dage frem

        //Vindhastighed lige nu og 8 timer frem(2 timer int.) og 5 dage frem 
        console.log(data.hourly.windspeed_10m[0]); //i dag
        console.log(data.hourly.windspeed_10m[1]); //i morgen
        console.log(data.hourly.windspeed_10m[2]); //3 dage frem
        console.log(data.hourly.windspeed_10m[3]); //4 dage frem
        console.log(data.hourly.windspeed_10m[4]); //5dage frem
        
        //Vindretning lige nu og 8 timer frem(2 timer int.) og 5 dage frem 
        console.log(data.hourly.winddirection_10m[0]); //i dag
        console.log(data.hourly.winddirection_10m[1]); //i morgen
        console.log(data.hourly.winddirection_10m[2]); //3 dage frem
        console.log(data.hourly.winddirection_10m[3]); //4 dage frem
        console.log(data.hourly.winddirection_10m[4]); //5dage frem

        //Temperaturen lige nu og 8 timer frem(2 timer int.) og 5 dage frem
        console.log(data.hourly.temperature_2m[0]); //nu
        console.log(data.hourly.temperature_2m[2]); //om 2 timer
        console.log(data.hourly.temperature_2m[4]); //om 4 timer
        console.log(data.hourly.temperature_2m[6]); //om 6 timer
        console.log(data.hourly.temperature_2m[8]); //om 8 timer

        //UV maks lige nu og 6 timer frem(2 timer int.)
        console.log(data.hourly.uv_index[0]); //nu
        console.log(data.hourly.uv_index[2]); //om 2 timer
        console.log(data.hourly.uv_index[4]); //om 4 timer
        console.log(data.hourly.uv_index[6]); //om 6 timer

        //Luftfugtighed lige nu og 6 timer frem(2 timer int.)
        console.log(data.hourly.relativehumidity_2m[0]); //nu
        console.log(data.hourly.relativehumidity_2m[2]); //om 2 timer
        console.log(data.hourly.relativehumidity_2m[4]); //om 4 timer
        console.log(data.hourly.relativehumidity_2m[6]); //om 6 timer

        //Nedbør lige nu og 6 timer frem(2 timer int.)
        console.log(data.hourly.precipitation[0]); //nu
        console.log(data.hourly.precipitation[2]); //om 2 timer
        console.log(data.hourly.precipitation[4]); //om 4 timer
        console.log(data.hourly.precipitation[6]); //om 6 timer

        //datoen i dag
        console.log(data.daily.time);

        //Klokken lige nu. 
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
       
        
        console.log(` ${currentHour}:${currentMinute}`);

        

      })
      .catch(error => console.error(error));
  });