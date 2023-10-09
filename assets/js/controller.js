// import functions her
import {GeoData} from './assets/js/model.js';


let solned = "";
let solop = "";
GeoData();
makeDayData(data);
function makeDayData(data){
 //solopgangs tidspunkt
 solop = data.daily.sunrise[0];
 solopgang = solop.split("T")[1].slice(0, 5);
 console.log(solopgang);

 //solnedgangs tidspunkt
 solned = data.daily.sunset[0];
 solnedgang = solned.split("T")[1].slice(0, 5);
 console.log(solnedgang);

};


