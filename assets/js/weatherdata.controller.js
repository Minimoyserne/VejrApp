import { getCurrentPosition, getCoordinates } from "./cordinates.model.js";
import { BuildMobilView, BuildTabletView, BuildPcView } from "./view.js";
import { getWeatherData } from "./weatherdata.model.js";

// let solop ="";
// let solopgang = "";

(async ()=>{
    const curPos = await getCurrentPosition()
    console.log(curPos);

    const weatherData = await getWeatherData(curPos.latitude, curPos.longitude)

    const coords = await getCurrentPosition();
    const data = await getCoordinates(coords.longitude, coords.latitude);

    let myPlace = data.address 
    
   
    DataConversion(weatherData, myPlace);
})()


// console.log(solop)

export function DataConversion(data, myPlace){
    
    console.log(data);
    const bredde = window.innerWidth;
    const spacer = " ";
    // Kode, der kun udføres på en pc-enhed
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
        placering.innerHTML = myPlace.city

        const vindSpeed = document.querySelector(".vindhastighed");
        vindSpeed.innerHTML = data.current.windspeed_10m + spacer + data.current_units.windspeed_10m;
        
        const temperatur = document.querySelector(".grader");
        temperatur.innerHTML = parseInt(data.current.temperature_2m) + data.current_units.winddirection_10m;

        const tid = document.querySelector(".tid");
        tid.innerHTML = data.current.time.split("T")[1];

        let vindpil = document.querySelector("#myIcon");
        vindpil.classList.add("fas", "fa-circle-arrow-down");
        let vindretningNu = data.hourly.winddirection_10m[0];

        vindpil.style.transform = `rotate(${vindretningNu}deg)`; //her rotere pilen alt efter antal grader den får fra API

        
    } else if (bredde <= 1024) {
    // DOM-kode til tablet enhed
    console.log("Dette er en tablet enhed");

    BuildTabletView(data);
  
  
    // Kode, der kun udføres på en tablet enhed
    } else {
    // DOM-kode til PC

      console.log("Dette er en PC enhed");
      BuildPcView(data);
    }

}

