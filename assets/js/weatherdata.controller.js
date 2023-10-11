import { getCurrentPosition } from "./cordinates.model.js";
import { getWeatherData } from "./weatherdata.model.js";

(async ()=>{
    getCurrentPosition()

    const weatherData = await getWeatherData(20, 50)
    console.log(weatherData);
    
})()