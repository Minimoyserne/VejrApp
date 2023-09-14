const myApp = document.getElementById('myApp');

// Kode, der kun udføres på en pc-enhed
if (!(/iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
  // DOM-kode til PC
  console.log("Dette er en pc-enhed");
  // Start på view kode til PC
  let mitSted = document.createElement("h2");
  mitSted.setAttribute("class", "pc-element");
  mitSted.innerText = mitSted
  myApp.appendChild(mitSted);
  

}

// Kode, der kun udføres på en mobil enhed
if (/iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  // DOM-kode til mobil enhed
  console.log("Dette er en mobil enhed");
// Start på view kode til mobil
  let mitSted = document.createElement("h2");
  mitSted.setAttribute("class", "mobil-element");
  mitSted.innerText = mitSted
  myApp.appendChild(mitSted);
  
}

// Kode, der kun udføres på en tablet enhed
if (/iPad|Android|webOS|BlackBerry|Tablet|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // DOM-kode til tablet enhed
    console.log("Dette er en tablet enhed");
    // Start på view kode til tablet 
    let mitSted = document.createElement("h2");
    mitSted.setAttribute("class", "tablet-element");
    mitSted.innerText = mitSted
    myApp.appendChild(mitSted);
    

}





const geoOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

navigator.geolocation.getCurrentPosition(success, error, geoOptions);

function success(pos) {
    const crd = pos.coords;

  // console.log( `${crd} Your current position is: Latitude : ${crd.latitude} Longitude: ${crd.longitude} More or less ${crd.accuracy} meters.`);
    getLocationName(crd.longitude, crd.latitude);
}

function error(err) {
    myApp.innerText = `ERROR(${err.code}): ${err.message}`;
}

function getLocationName(myLong, myLat) {

//console.log(myLong, myLat);
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
  
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode,windspeed_10m,winddirection_10m,uv_index&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,rain_sum,windspeed_10m_max,winddirection_10m_dominant&timezone=Europe%2FBerlin`;

    
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

    //Vindhastighed lige nu og 8 timer frem(2 timer int.) 
    const vindhastighedNu = data.hourly.windspeed_10m[0];
    console.log(vindhastighedNu);
    const vindhastighedom2Timer = data.hourly.windspeed_10m[2];
    console.log(vindhastighedom2Timer);
    const vindhastighedOm4Timer = data.hourly.windspeed_10m[4];
    console.log(vindhastighedOm4Timer);
    const vindhastighedOm6Timer = data.hourly.windspeed_10m[6];
    console.log(vindhastighedOm6Timer);
    const vindhastighedOm8Timer = data.hourly.windspeed_10m[8];
    console.log(vindhastighedOm8Timer);

    //Vindretning lige nu og 8 timer frem(2 timer int.) 
    const vindretningNu = data.hourly.winddirection_10m[0];
    console.log(vindretningNu);
    const vindretningImorgen = data.hourly.winddirection_10m[1];
    console.log(vindretningImorgen);
    const vindretningOm3Dage = data.hourly.winddirection_10m[2];
    console.log(vindretningOm3Dage);
    const vindretningOm4Dage = data.hourly.winddirection_10m[3];
    console.log(vindretningOm4Dage);
    const vindretningOm5Dage = data.hourly.winddirection_10m[4];
    console.log(vindretningOm5Dage);

    //Temperaturen lige nu og 8 timer frem(2 timer int.)
    const temperaturNu = data.hourly.temperature_2m[0];
    console.log(temperaturNu);
    const temperaturOm2Timer = data.hourly.temperature_2m[2];
    console.log(temperaturOm2Timer);
    const temperaturOm4Timer = data.hourly.temperature_2m[4];
    console.log(temperaturOm4Timer);
    const temperaturOm6Timer = data.hourly.temperature_2m[6];
    console.log(temperaturOm6Timer);
    const temperaturOm8Timer = data.hourly.temperature_2m[8];
    console.log(temperaturOm8Timer);

    //UV maks lige nu og 6 timer frem(2 timer int.)
    const uvMaksNu = data.hourly.uv_index[0];
    console.log(uvMaksNu);
    const uvMaksOm2Timer = data.hourly.uv_index[2];
    console.log(uvMaksOm2Timer);
    const uvMaksOm4Timer = data.hourly.uv_index[4];
    console.log(uvMaksOm4Timer);
    const uvMaksOm6Timer = data.hourly.uv_index[6];
    console.log(uvMaksOm6Timer);
    
    //Luftfugtighed lige nu og 6 timer frem(2 timer int.)
    const luftfugtighedNu = data.hourly.relativehumidity_2m[0];
    console.log(luftfugtighedNu);
    const luftfugtighedOm2Timer = data.hourly.relativehumidity_2m[2];
    console.log(luftfugtighedOm2Timer);
    const luftfugtighedOm4Timer = data.hourly.relativehumidity_2m[4];
    console.log(luftfugtighedOm4Timer);
    const luftfugtighedOm6Timer = data.hourly.relativehumidity_2m[6];
    console.log(luftfugtighedOm6Timer);

    //Nedbør lige nu og 6 timer frem(2 timer int.)
    const nedbørNu = data.hourly.precipitation[0];
    console.log(nedbørNu);
    const nedbørOm2Timer = data.hourly.precipitation[2];
    console.log(nedbørOm2Timer);
    const nedbørOm4Timer = data.hourly.precipitation[4];
    console.log(nedbørOm4Timer);
    const nedbørOm6Timer = data.hourly.precipitation[6];
    console.log(nedbørOm6Timer);

    //datoen i dag
    const datoIDag = data.daily.time[0];
    console.log(datoIDag);

    //Klokken lige nu. 
    const dato = new Date();
    const timenNu = dato.getHours();
    const minutNu = dato.getMinutes();
    //console.log(`${timenNu}:${minutNu}`);
    const TidNu = `${timenNu}:${minutNu}`
    console.log(TidNu);
}




function makeWeekData(data) {
    //Vejr typen 
    const vejrTypeIMorgen = data.hourly.weathercode[1];
    console.log(vejrTypeIMorgen);
    const vejrTypeOm2Dage = data.hourly.weathercode[2];
    console.log(vejrTypeOm2Dage);
    const vejrTypeOm3Dage = data.hourly.weathercode[3];
    console.log(vejrTypeOm3Dage);
    const vejrTypeOm4Dage = data.hourly.weathercode[4];
    console.log(vejrTypeOm4Dage);
    const vejrTypeOm5Dage = data.hourly.weathercode[5];
    console.log(vejrTypeOm5Dage);

    //Vindhastighed 5 dage frem 
    const vindhastighedImorgen = data.daily.windspeed_10m_max[1];
    console.log(vindhastighedImorgen);
    const vindhastighedOm2Dage = data.daily.windspeed_10m_max[2];
    console.log(vindhastighedOm2Dage);
    const vindhastighedOm3Dage = data.daily.windspeed_10m_max[3];
    console.log(vindhastighedOm3Dage);
    const vindhastighedOm4Dage = data.daily.windspeed_10m_max[4];
    console.log(vindhastighedOm4Dage);
    const vindhastighedOm5Dage = data.daily.windspeed_10m_max[5];
    console.log(vindhastighedOm5Dage);

    //Vindretning 5 dage frem  
    const vindretningImorgen = data.daily.winddirection_10m_dominant[1];
    console.log(vindretningImorgen);
    const vindretningOm2Dage = data.daily.winddirection_10m_dominant[2];
    console.log(vindretningOm2Dage);
    const vindretningOm3Dage = data.daily.winddirection_10m_dominant[3];
    console.log(vindretningOm3Dage);
    const vindretningOm4Dage = data.daily.winddirection_10m_dominant[4];
    console.log(vindretningOm4Dage);
    const vindretningOm5Dage = data.daily.winddirection_10m_dominant[5];
    console.log(vindretningOm5Dage);

    //Max temperaturen 5 dage frem
    const temperaturIMorgen = data.daily.temperature_2m_max[1];
    console.log(temperaturIMorgen);
    const temperaturOm2Dage = data.daily.temperature_2m_max[2];
    console.log(temperaturOm2Dage);
    const temperaturOm3Dage = data.daily.temperature_2m_max[3];
    console.log(temperaturOm3Dage);
    const temperaturOm4Dage = data.daily.temperature_2m_max[4];
    console.log(temperaturOm4Dage);
    const temperaturOm5Dage = data.daily.temperature_2m_max[5];
    console.log(temperaturOm5Dage);
    }
