

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
    dayData = data;
    weekData = data; 
       
    makeDayaData(data);
    makeWeekData(data);
   

})
.catch(error => console.error(error));
});


function makeDayaData(data) {
    //solopgangs tidspunkt
    const solop = data.daily.sunrise[0];
    const solopgang = solop.split("T")[1].slice(0, 5);
    console.log(solopgang);

    //solnedgangs tidspunkt
    const solned = data.daily.sunset[0];
    const solnedgang = solned.split("T")[1].slice(0, 5);
    console.log(solnedgang);

    //Højeste temperatur på dagen
    const maxTemperatur = data.daily.temperature_2m_max[0];
    console.log(maxTemperatur);

    //Laveste temperatur på dagen
    const minTemperatur = data.daily.temperature_2m_min[0];
    console.log(minTemperatur);

    //Vejr typen 
    const vejrTypeIDag = data.hourly.weathercode[0];
    console.log(vejrTypeIDag);



    
}




function makeWeekData(data) {
    //Vejr typen 
    const vejrTypeIMorgen = data.hourly.weathercode[1];
    console.log(vejrTypeIMorgen);
    const vejrTypeOm3Dage = data.hourly.weathercode[2];
    console.log(vejrTypeOm3Dage);
    const vejrTypeOm4Dage = data.hourly.weathercode[3];
    console.log(vejrTypeOm4Dage);
    const vejrTypeOm5Dage = data.hourly.weathercode[4];
    console.log(vejrTypeOm5Dage);


}


//Vindhastighed lige nu og 8 timer frem(2 timer int.) og 5 dage frem 
const vindhastighedNu = data.hourly.windspeed_10m[0];
const vindhastighedImorgen = data.hourly.windspeed_10m[1];
const vindhastighedOm3Dage = data.hourly.windspeed_10m[2];
const vindhastighedOm4Dage = data.hourly.windspeed_10m[3];
const vindhastighedOm5Dage = data.hourly.windspeed_10m[4];
console.log(vindhastighedNu);
console.log(vindhastighedImorgen);
console.log(vindhastighedOm3Dage);
console.log(vindhastighedOm4Dage);
console.log(vindhastighedOm5Dage);

//Vindretning lige nu og 8 timer frem(2 timer int.) og 5 dage frem 
const vindretningNu = data.hourly.winddirection_10m[0];
const vindretningImorgen = data.hourly.winddirection_10m[1];
const vindretningOm3Dage = data.hourly.winddirection_10m[2];
const vindretningOm4Dage = data.hourly.winddirection_10m[3];
const vindretningOm5Dage = data.hourly.winddirection_10m[4];
console.log(vindretningNu);
console.log(vindretningImorgen);
console.log(vindretningOm3Dage);
console.log(vindretningOm4Dage);
console.log(vindretningOm5Dage);

//Temperaturen lige nu og 8 timer frem(2 timer int.) og 5 dage frem
const temperaturNu = data.hourly.temperature_2m[0];
const temperaturOm2Timer = data.hourly.temperature_2m[2];
const temperaturOm4Timer = data.hourly.temperature_2m[4];
const temperaturOm6Timer = data.hourly.temperature_2m[6];
const temperaturOm8Timer = data.hourly.temperature_2m[8];
console.log(temperaturNu);
console.log(temperaturOm2Timer);
console.log(temperaturOm4Timer);
console.log(temperaturOm6Timer);
console.log(temperaturOm8Timer);

//UV maks lige nu og 6 timer frem(2 timer int.)
const uvMaksNu = data.hourly.uv_index[0];
const uvMaksOm2Timer = data.hourly.uv_index[2];
const uvMaksOm4Timer = data.hourly.uv_index[4];
const uvMaksOm6Timer = data.hourly.uv_index[6];
console.log(uvMaksNu);
console.log(uvMaksOm2Timer);
console.log(uvMaksOm4Timer);
console.log(uvMaksOm6Timer);

//Luftfugtighed lige nu og 6 timer frem(2 timer int.)
const luftfugtighedNu = data.hourly.relativehumidity_2m[0];
const luftfugtighedOm2Timer = data.hourly.relativehumidity_2m[2];
const luftfugtighedOm4Timer = data.hourly.relativehumidity_2m[4];
const luftfugtighedOm6Timer = data.hourly.relativehumidity_2m[6];
console.log(luftfugtighedNu);
console.log(luftfugtighedOm2Timer);
console.log(luftfugtighedOm4Timer);
console.log(luftfugtighedOm6Timer);

//Nedbør lige nu og 6 timer frem(2 timer int.)
const nedbørNu = data.hourly.precipitation[0];
const nedbørOm2Timer = data.hourly.precipitation[2];
const nedbørOm4Timer = data.hourly.precipitation[4];
const nedbørOm6Timer = data.hourly.precipitation[6];
console.log(nedbørNu);
console.log(nedbørOm2Timer);
console.log(nedbørOm4Timer);
console.log(nedbørOm6Timer);

//datoen i dag
const datoIDag = data.daily.time[0];
console.log(datoIDag);

//Klokken lige nu. 
const dato = new Date();
const timenNu = dato.getHours();
const minutNu = dato.getMinutes();
console.log(`${timenNu}:${minutNu}`);
const TidNu = `${timenNu}:${minutNu}`
console.log(TidNu);


