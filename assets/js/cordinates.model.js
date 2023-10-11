
export const getCurrentPosition = async () => {
    const geoOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(success, error, geoOptions);

    
    function success(pos) {
        const crd = pos.coords;
        // console.log(crd);
        getCoordinates(crd.longitude, crd.latitude);
    }
    
    function error(error) {
        console.error(error);
    }

}


export const getCoordinates = async (myLat, myLong) => {
   console.log(myLat, myLong);
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${myLat}&lon=${myLong}&format=json`;
console.log(apiUrl);
    const response = await fetch(apiUrl)
    const result = await response.json();
//    return result
 console.log({result});
}
