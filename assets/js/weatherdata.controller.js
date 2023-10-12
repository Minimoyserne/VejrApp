import { getCurrentPosition } from "./cordinates.model.js";
import { BuildMobilView, BuildTabletView, BuildPcView } from "./view.js";
import { getWeatherData } from "./weatherdata.model.js";

// let solop ="";
// let solopgang = "";

(async ()=>{
    const curPos = await getCurrentPosition()
    console.log(curPos);

    const weatherData = await getWeatherData(curPos.latitude, curPos.longitude)

    DataConversion(weatherData);
    
})()


// console.log(solop)

export function DataConversion(data){
    
    console.log(data);
    const bredde = window.innerWidth;
    // Kode, der kun udføres på en pc-enhed
    if (bredde <= 768) {
    //(/iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // DOM-kode til mobil enhed
        console.log("Dette er en mobil enhed");
        BuildMobilView(data);
        const sunrise = document.querySelector(".sol-op");
        sunrise.innerHTML = data.daily.sunrise[0].split("T")[1].slice(0, 5);
        const sunset = document.querySelector(".sol-ned");
        sunset.innerHTML = data.daily.sunset[0].split("T")[1].slice(0, 5);

        const minTemp = document.querySelector(".min-temp");
        minTemp.innerHTML = `H: ${data.daily.temperature_2m_min[0] + data.daily_units.temperature_2m_min}`;
        const maxTemp = document.querySelector(".max-temp");
        maxTemp.innerHTML = `L: ${data.daily.temperature_2m_max[0] + data.daily_units.temperature_2m_max}`;


    }else if (bredde <= 1024) {
    //(/iPad|Android|webOS|BlackBerry|Tablet|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
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


