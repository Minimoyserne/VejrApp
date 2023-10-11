import { dayData, solop } from "./weatherdata.controller.js";

console.log(dayData);
console.log(solop);

const myApp = document.getElementById('myApp');

export function BuildLoadingScreen() {

    const loader = document.querySelector(".loader");
    if (loader) {
        loader.classList.add("loader-hidden");
        loader.addEventListener("transitionend", () => {
            if (document.body.contains(loader)) {
                document.body.removeChild(loader);
                console.log("Loader removed successfully.");
            } else {
                console.log("Loader element does not exist in the DOM.");
            }
        });
    } else {
        console.log("Loader element not found.");
    }
}