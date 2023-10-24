import { getCurrentPosition, getCoordinates } from "./cordinates.model.js";
import { BuildMobilView, BuildTabletView, BuildPcView } from "./view.js";
import { getWeatherData } from "./weatherdata.model.js";


(async ()=>{
    const curPos = await getCurrentPosition()
 

    const weatherData = await getWeatherData(curPos.latitude, curPos.longitude)

    const coords = await getCurrentPosition();
    const data = await getCoordinates(coords.longitude, coords.latitude);

    let myPlace = data.address
    
   
    DataConversion(weatherData, myPlace);
})()


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



export function DataConversion(data, myPlace){
    
    const bredde = window.innerWidth;
    const spacer = " ";
   
    if (bredde <= 768) {
        // DOM-kode til mobil enhed
        console.log("Dette er en mobil enhed");
        BuildMobilView(data);
        const sunrise = document.querySelector(".sol-op");
        sunrise.innerHTML = data.daily.sunrise[0].split("T")[1];
        const sunset = document.querySelector(".sol-ned");
        sunset.innerHTML = data.daily.sunset[0].split("T")[1];

        const Temp = document.querySelector(".temp");
        Temp.innerHTML = `H: ${data.daily.temperature_2m_max[0] + spacer + data.daily_units.temperature_2m_max} L: ${data.daily.temperature_2m_min[0] + spacer + data.daily_units.temperature_2m_min}`;
        
        const placering = document.querySelector(".sted");
        placering.innerText = `${myPlace.village || myPlace.city}`

        const vejrTypeIDag = data.daily.weathercode[0];
        const weatherCode = vejrTypeIDag;
        const weatherText = weatherCodeToText(weatherCode);
        const vejrTekst = document.querySelector(".vejrtype");
        vejrTekst.innerHTML = weatherText;

        const vindSpeed = document.querySelector(".vindhastighed");
        vindSpeed.innerHTML = data.current.windspeed_10m + spacer + data.current_units.windspeed_10m;
        
        const temperatur = document.querySelector(".grader");
        temperatur.innerHTML = parseInt(data.current.temperature_2m) + data.current_units.winddirection_10m;

        const tid = document.querySelector(".tid");
        tid.innerHTML = data.current.time.split("T")[1];

        const vindpil = document.querySelector("#myIcon");
        vindpil.classList.add("fas", "fa-circle-arrow-down");
        const vindretningNu = data.hourly.winddirection_10m[0];

        vindpil.style.transform = `rotate(${vindretningNu}deg)`;

        
    } else if (bredde <= 1024) {
    // DOM-kode til tablet enhed
    console.log("Dette er en tablet enhed");

    BuildTabletView(data);
  
  
    } else {
    // DOM-kode til PC

      console.log("Dette er en PC enhed");
      BuildPcView(data);
    }

}

if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./serviceWorker.js')
	.then(reg => console.log('service worker registered', reg))
	.catch(err => console.error('service worker not registered', err)) 
}

