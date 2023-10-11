import { getCurrentPosition } from "./cordinates.model.js";
import { getWeatherData } from "./weatherdata.model.js";

let solop ="";

(async ()=>{
    const curPos = await getCurrentPosition()
    //console.log(curPos);

    const weatherData = await getWeatherData(curPos.latitude, curPos.longitude)
    console.log(weatherData);
    
    let dayData = weatherData.daily
    console.log(dayData);

    solop = dayData.sunrise[0].split("T")[1].slice(0, 5);
    console.log(solop);
})()