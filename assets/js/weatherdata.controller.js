import { getCurrentPosition } from "./cordinates.model.js";
import { getWeatherData } from "./weatherdata.model.js";

(async ()=>{
    const curPos = await getCurrentPosition()
    //console.log(curPos);

    const weatherData = await getWeatherData(curPos.latitude, curPos.longitude)
    console.log(weatherData);
    let dayData = weatherData.hourly
    console.log(dayData);
})()