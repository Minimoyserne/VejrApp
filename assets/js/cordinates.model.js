
export const getCurrentPosition = async () => {
    const geoOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };



    return new Promise((resolve, reject) => {
        return navigator.geolocation.getCurrentPosition(
            pos => {
                resolve({
                longitude: pos.coords.longitude,
                latitude: pos.coords.latitude
            })
            },
        () => { 
            reject('curPos Error')
        },
        geoOptions)
    })
}

    

    
//     function success(pos) {
//         const crd = pos.coords;
//         // console.log(crd);
//        return getCoordinates(crd.longitude, crd.latitude);
//     }
    
//     function error(error) {
//         console.error(error);
//     }
// }


export const getCoordinates = async (myLong, myLat) => {
   console.log(myLong, myLat);



    const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${myLat}&lon=${myLong}&format=json`;
console.log(apiUrl);
    const response = await fetch(apiUrl)
    const result = await response.json();
    return result
 //console.log({result});

}



    //solopgangs tidspunkt
    // solop = data.daily.sunrise[0];
    // solopgang = solop.split("T")[1].slice(0, 5);
    // console.log(solopgang);