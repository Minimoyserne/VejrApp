    
// Tomme variabler til data om vejret

        //Day data

    let solop = "";
    let solopgangs = "";
    let solnedal = "";
    let solnedang = "";

    let maxTemperatur = "";
    let minTemperatur = "";
    let vejrTypeIDag = "";

    let vindhastighedNu = "";
    let vindhastighedom2Timer = "";
    let vindhastighedom4Timer = "";
    let vindhastighedOm6Timer = "";
    let vindhastighedOm8Timer = "";

    let vindretningNu = "";
    let vindretningOm2timer = "";
    let vindretningOm4Timer = "";
    let vindretningOm6Timer = "";
    let vindretningOm8Timer = "";

    let temperaturNu = "";
    let temperaturOm2Timer = "";
    let temperaturOm4Timer = "";
    let temperaturOm6Timer = "";
    let temperaturOm8Timer = "";

    let uvMaksNu = "";
    let uvMaksOm2Timer = "";
    let uvmaksOm4Timer = "";
    let uvMaksOm6Timer = "";

    let luftfugtighedNu = "";
    let luftfugtighedOm2Timer = "";
    let luftfugtighedOm4Timer = "";
    let luftfugtighedOm6Timer = "";

    let nedbørNu = "";
    let nedbørOm2Timer = "";
    let nedbørOm4Timer = "";
    let nedbørOm6Timer = "";

    let datoIDag = "";
    let timenNu = "";
    let minutNu = "";
    let dato = "";
    let TidNu = "";



    // Week data

    let vejrTypeIMorgen = "";
    let vejrTypeOm2Dage = "";
    let vejrTypeOm3Dage = "";
    let vejrTypeOm4Dage = "";
    let vejrTypeOm5Dage = "";

    let vindhastighedImorgen = "";
    let vindhastighedOm2Dage = "";
    let vindhastighedOm3Dage = "";
    let vindhastighedOm4Dage = "";
    let vindhastighedOm5Dage = "";

    let vindretningImorgen = "";
    let vindretningOm2Dage = "";
    let vindretningOm3Dage = "";
    let vindretningOm4Dage = "";
    let vindretningOm5Dage = "";

    let temperaturIMorgen = "";
    let temperaturOm2Dage = "";
    let temperaturOm3Dage = "";
    let temperaturOm4Dage = "";
    let temperaturOm5Dage = "";


const myApp = document.getElementById('myApp');







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
        
        myResElement.innerText = `${data.address.city}`;
    })
    .catch((error) => {
        console.error('Error:', error);
        myResElement.innerText = `my error: ${error}`;
    });
    
    myApp.appendChild(myResElement);
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
    console.table(data);
    dayData = data;
    weekData = data; 
       
    makeDayaData(data);
    makeWeekData(data);
   

})
.catch(error => console.error(error));
});

    


function makeDayaData(data) {
    //solopgangs tidspunkt
    
    solop = data.daily.sunrise[0];
    solopgang = solop.split("T")[1].slice(0, 5);
    console.log(solopgang);

    //solnedgangs tidspunkt
    solned = data.daily.sunset[0];
    solnedgang = solned.split("T")[1].slice(0, 5);
    console.log(solnedgang);

    //Højeste temperatur på dagen
    maxTemperatur = data.daily.temperature_2m_max[0];
    console.log(maxTemperatur);

    //Laveste temperatur på dagen
    minTemperatur = data.daily.temperature_2m_min[0];
    console.log(minTemperatur);

    //Vejr typen 
    vejrTypeIDag = data.hourly.weathercode[0];
    console.log(vejrTypeIDag);

    

    //Vindhastighed lige nu og 8 timer frem(2 timer int.) 
    vindhastighedNu = data.hourly.windspeed_10m[0];
    console.log(vindhastighedNu);
    vindhastighedom2Timer = data.hourly.windspeed_10m[2];
    console.log(vindhastighedom2Timer);
    vindhastighedOm4Timer = data.hourly.windspeed_10m[4];
    console.log(vindhastighedOm4Timer);
    vindhastighedOm6Timer = data.hourly.windspeed_10m[6];
    console.log(vindhastighedOm6Timer);
    vindhastighedOm8Timer = data.hourly.windspeed_10m[8];
    console.log(vindhastighedOm8Timer);

    
    //Vindretning lige nu og 8 timer frem(2 timer int.) 
    vindretningNu = data.hourly.winddirection_10m[0];
    console.log(vindretningNu);
    vindretningOm2timer = data.hourly.winddirection_10m[1];
    console.log(vindretningImorgen);
    vindretningOm3Dage = data.hourly.winddirection_10m[2];
    console.log(vindretningOm3Dage);
    vindretningOm4Dage = data.hourly.winddirection_10m[3];
    console.log(vindretningOm4Dage);
    vindretningOm5Dage = data.hourly.winddirection_10m[4];
    console.log(vindretningOm5Dage);

    
    //Temperaturen lige nu og 8 timer frem(2 timer int.)
    temperaturNu = data.hourly.temperature_2m[0];
    console.log(temperaturNu);
    temperaturOm2Timer = data.hourly.temperature_2m[2];
    console.log(temperaturOm2Timer);
    temperaturOm4Timer = data.hourly.temperature_2m[4];
    console.log(temperaturOm4Timer);
    temperaturOm6Timer = data.hourly.temperature_2m[6];
    console.log(temperaturOm6Timer);
    temperaturOm8Timer = data.hourly.temperature_2m[8];
    console.log(temperaturOm8Timer);

    
    //UV maks lige nu og 6 timer frem(2 timer int.)
    uvMaksNu = data.hourly.uv_index[0];
    console.log(uvMaksNu);
    uvMaksOm2Timer = data.hourly.uv_index[2];
    console.log(uvMaksOm2Timer);
    uvMaksOm4Timer = data.hourly.uv_index[4];
    console.log(uvMaksOm4Timer);
    uvMaksOm6Timer = data.hourly.uv_index[6];
    console.log(uvMaksOm6Timer);
    
   
    //Luftfugtighed lige nu og 6 timer frem(2 timer int.)
    luftfugtighedNu = data.hourly.relativehumidity_2m[0];
    console.log(luftfugtighedNu);
    luftfugtighedOm2Timer = data.hourly.relativehumidity_2m[2];
    console.log(luftfugtighedOm2Timer);
    luftfugtighedOm4Timer = data.hourly.relativehumidity_2m[4];
    console.log(luftfugtighedOm4Timer);
    luftfugtighedOm6Timer = data.hourly.relativehumidity_2m[6];
    console.log(luftfugtighedOm6Timer);

    
    //Nedbør lige nu og 6 timer frem(2 timer int.)
    nedbørNu = data.hourly.precipitation[0];
    console.log(nedbørNu);
    nedbørOm2Timer = data.hourly.precipitation[2];
    console.log(nedbørOm2Timer);
    nedbørOm4Timer = data.hourly.precipitation[4];
    console.log(nedbørOm4Timer);
    nedbørOm6Timer = data.hourly.precipitation[6];
    console.log(nedbørOm6Timer);

    //datoen i dag
    datoIDag = data.daily.time[0];
    console.log(datoIDag);

    
    //Klokken lige nu. 
    dato = new Date();
    timenNu = dato.getHours();
    minutNu = dato.getMinutes();
    //console.log(`${timenNu}:${minutNu}`);
    TidNu = `${timenNu}:${minutNu}`
    console.log(TidNu);
}





function makeWeekData(data) {
    //Vejr typen 
    vejrTypeIMorgen = data.hourly.weathercode[1];
    console.log(vejrTypeIMorgen);
    vejrTypeOm2Dage = data.hourly.weathercode[2];
    console.log(vejrTypeOm2Dage);
    vejrTypeOm3Dage = data.hourly.weathercode[3];
    console.log(vejrTypeOm3Dage);
    vejrTypeOm4Dage = data.hourly.weathercode[4];
    console.log(vejrTypeOm4Dage);
    vejrTypeOm5Dage = data.hourly.weathercode[5];
    console.log(vejrTypeOm5Dage);


    //Vindhastighed 5 dage frem 
    vindhastighedImorgen = data.daily.windspeed_10m_max[1];
    console.log(vindhastighedImorgen);
    vindhastighedOm2Dage = data.daily.windspeed_10m_max[2];
    console.log(vindhastighedOm2Dage);
    vindhastighedOm3Dage = data.daily.windspeed_10m_max[3];
    console.log(vindhastighedOm3Dage);
    vindhastighedOm4Dage = data.daily.windspeed_10m_max[4];
    console.log(vindhastighedOm4Dage);
    vindhastighedOm5Dage = data.daily.windspeed_10m_max[5];
    console.log(vindhastighedOm5Dage);

    //Vindretning 5 dage frem  
    vindretningImorgen = data.daily.winddirection_10m_dominant[1];
    console.log(vindretningImorgen);
    vindretningOm2Dage = data.daily.winddirection_10m_dominant[2];
    console.log(vindretningOm2Dage);
    vindretningOm3Dage = data.daily.winddirection_10m_dominant[3];
    console.log(vindretningOm3Dage);
    vindretningOm4Dage = data.daily.winddirection_10m_dominant[4];
    console.log(vindretningOm4Dage);
    vindretningOm5Dage = data.daily.winddirection_10m_dominant[5];
    console.log(vindretningOm5Dage);

    //Max temperaturen 5 dage frem
    temperaturIMorgen = data.daily.temperature_2m_max[1];
    console.log(temperaturIMorgen);
    temperaturOm2Dage = data.daily.temperature_2m_max[2];
    console.log(temperaturOm2Dage);
    temperaturOm3Dage = data.daily.temperature_2m_max[3];
    console.log(temperaturOm3Dage);
    temperaturOm4Dage = data.daily.temperature_2m_max[4];
    console.log(temperaturOm4Dage);
    temperaturOm5Dage = data.daily.temperature_2m_max[5];
    console.log(temperaturOm5Dage);
    }



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