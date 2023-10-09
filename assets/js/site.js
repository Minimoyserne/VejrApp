// Tomme variabler til data om vejret

        //Day data
let datData = [];
let weekData = [];

    let solop = ""; let solopgangs = ""; let solnedal = ""; let solnedang = "";

    let maxTemperatur = ""; let minTemperatur = ""; let vejrTypeIDag = "";

    let vindhastighedNu = ""; let vindhastighedom2Timer = ""; let vindhastighedom4Timer = ""; let vindhastighedOm6Timer = ""; let vindhastighedOm8Timer = "";

    let vindretningNu = ""; let vindretningOm2timer = ""; let vindretningOm4Timer = ""; let vindretningOm6Timer = "";
    let vindretningOm8Timer = "";

    let temperaturNu = ""; let temperaturOm2Timer = ""; let temperaturOm4Timer = ""; let temperaturOm6Timer = ""; let temperaturOm8Timer = "";

    let uvMaksNu = ""; let uvMaksOm2Timer = ""; let uvmaksOm4Timer = ""; let uvMaksOm6Timer = "";

    let luftfugtighedNu = ""; let luftfugtighedOm2Timer = ""; let luftfugtighedOm4Timer = ""; let luftfugtighedOm6Timer = "";

    let nedbørNu = ""; let nedbørOm2Timer = ""; let nedbørOm4Timer = ""; let nedbørOm6Timer = "";

    let datoIDag = ""; let timenNu = ""; let minutNu = ""; let dato = ""; let TidNu = "";



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

//andre variabler fra HTML
const myApp = document.getElementById('myApp');

let myIcon = document.getElementById("myIcon");
myIcon.classList.add("fas", "fa-arrow-down");

//geo lokation indhentning
// const geoOptions = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
// };

// navigator.geolocation.getCurrentPosition(success, error, geoOptions);

// function success(pos) {
//     const crd = pos.coords;

//     GeoData(crd.longitude, crd.latitude);
// }

// function error(err) {
//     myApp.innerText = `ERROR(${err.code}): ${err.message}`;
// }

// function GeoData(myLong, myLat) {

//     //console.log(myLong, myLat);
//     const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${myLat}&lon=${myLong}&format=json`;

//     console.log(apiUrl);

//     // let mitSted = document.createElement('h2');

//     let fetchOptions={
    
//     Method: 'GET',
//     Body: 'body',
//     Cache: 'default',
    
//     Headers: {
//         'Accept': 'application.json',
//         'Content-Type': 'application/json'
//     }
    
//     };

//     fetch(apiUrl,fetchOptions)

//     fetch(apiUrl)
//     .then((response) => response.json())
    
//     .then((data) => {
//         console.log('my fetched data:', data);
        
//         // mitSted.innerText = `${data.address.village || data.address.city}`;
//         // console.log(`${data.address.village}`);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//         // mitSted.innerText = `my error: ${error}`;
//     });
    
//     // myApp.appendChild(mitSted);
//     // mitSted.setAttribute("class", "mitsted");
// }

//     //let grader = "";
//     // Get the user's current location
//     navigator.geolocation.getCurrentPosition(position => {
//     const { latitude, longitude } = position.coords;
    
//     // Construct the URL for the weather API
//     //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=YOUR_API_KEY`;
  
//     const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode,windspeed_10m,winddirection_10m,uv_index&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,rain_sum,windspeed_10m_max,winddirection_10m_dominant&timezone=Europe%2FBerlin`;

    
//     // Fetch the weather data for the user's current location
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//     console.table(data);
//     dayData = data;
//     weekData = data; 
       
//     makeDayaData(data);
//     makeWeekData(data);

//     //hent grader til vindretning
//     // vindretningNu = data.hourly.winddirection_10m[0];
//     console.log(vindretningNu);

//     // grader = data.grader; // API returnerer grader som bruges til at styre retningen på pilen
//     // myIcon.style.transform = `rotate(${vindretningNu}deg)`; //her rotere pilen alt efter antal grader den får fra API
    

// })
//     .catch(error => console.error(error));
// });







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
    console.log(vindretningOm2timer);
    vindretningOm4Timer = data.hourly.winddirection_10m[2];
    console.log(vindretningOm4Timer);
    vindretningOm6Timer = data.hourly.winddirection_10m[3];
    console.log(vindretningOm6Timer);
    vindretningOm8Timer = data.hourly.winddirection_10m[4];
    console.log(vindretningOm8Timer);

    
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

    function weatherCodeToText(weatherCode) {
        let feedbackTekst = "";
        switch (weatherCode) {
            case 0:
                feedbackTekst = "Skyfri";
                break;
            case 1:
                feedbackTekst = "Klart";
                break;
            case 2:
                feedbackTekst = "Skyet";
                break;
            case 3:
                feedbackTekst = "Overskyet";
                break;
            case 45:
                feedbackTekst = "Tåget";
                break;
            case 48:
                feedbackTekst = "Rimtåget";
                break;
            case 51:
                feedbackTekst = "Let støvregn";
                break;
            case 53:
                feedbackTekst = "Moderart støvregn";
                break;
            case 55:
                feedbackTekst = "kraftig støvregn";
                break;
            case 56:
                feedbackTekst = "Let støvet frostregn";
                break;
            case 57:
                feedbackTekst = "Tæt støvet frostregn";
                break;
            case 61:
                feedbackTekst = "Let regn";
                break;
            case 63:
                feedbackTekst = "Regn";
                break;
            case 65:
                feedbackTekst = "Kraftif regn";
                break;
            case 66:
                feedbackTekst = "Let frostregn";
                break;
            case 67:
                feedbackTekst = "Kraftif frostregn";
                break;
            case 71:
                feedbackTekst = "Let Snevejr";
                break;
            case 73:
                feedbackTekst = "Snevejr";
                break;
            case 75:
                feedbackTekst = "Kraftig snevejr";
                break;
            case 77:
                feedbackTekst = "Hagl";
                break;
            case 80:
                feedbackTekst = "Let regnbyger";
                break;
            case 81:
                feedbackTekst = "Moderart regnbyger";
                break;
            case 82:
                feedbackTekst = "Voldsomme regnbyger";
                break;
            case 85:
                feedbackTekst = "Let snebyger";
                break;
            case 86:
                feedbackTekst = "kraftig snebyger";
                break;
            case 95:
                feedbackTekst = "Tordenvejr";
                break;
            case 96:
                feedbackTekst = "Tordenvejr med let hagl";
                break;
            case 99:
                feedbackTekst = "Tordenvejr med kraftig hagl";
                break;
            default:
                feedbackTekst = "Unknown";
        }
        return feedbackTekst;
    }
    
    // Example usage:
    let weatherCode = vejrTypeIDag;
    const weatherText = weatherCodeToText(weatherCode);
    console.log(weatherText); // Output: eks. "Skyfri" ved case 0
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
  //  let mitSted = document.createElement("h2");
  //  mitSted.setAttribute("class", "pc-element");
  //  mitSted.innerText = mitSted
   // myApp.appendChild(mitSted);
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