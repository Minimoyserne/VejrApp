const geoOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

navigator.geolocation.getCurrentPosition(success, error, geoOptions);

function success(pos) {
    const crd = pos.coords;

    GeoData(crd.longitude, crd.latitude);
}

function error(err) {
    console.log(err);
}


function GeoData(myLat, myLong) {
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${myLat}&lon=${myLong}&format=json`;
    fetch(apiUrl)
        .then((response) => response.json())

        .then((data) => {
            console.log('mitData : ', data)
        });
    }

