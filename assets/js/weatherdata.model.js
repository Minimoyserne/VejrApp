
/**
 * Henter vejr data 
 * @param {number} latitude  
 * @param {number} longitude 
 * @returns array med vejr data
 */
export const getWeatherData = async (latitude, longitude) => {
    const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relativehumidity_2m,rain,weathercode,windspeed_10m,winddirection_10m&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,weathercode,windspeed_10m,winddirection_10m,uv_index&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,rain_sum,windspeed_10m_max,winddirection_10m_dominant&timezone=Europe%2FBerlin`;
    
    let fetchOptions={
            
        Method: 'GET',
        Body: 'body',
        Cache: 'default',
        
        Headers: {
            'Accept': 'application.json',
            'Content-Type': 'application/json'
        }
        
    }

    const response = await fetch(endpoint, fetchOptions)
    const result = await response.json();
    return result
// console.log({result});

}



