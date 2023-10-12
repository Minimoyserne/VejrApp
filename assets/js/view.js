import { DataConversion } from "./weatherdata.controller.js";

console.log(DataConversion);
// console.log(solop);

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

export function BuildMobilView() {
    myApp.innerHTML = `
    <section>
        <header>
            <img src="assets/image/sol-op-ned.png" alt="">
                <article class="header-containter">
                <article>
                    <p class="sol-op"></p>
                    <p class="sol-ned"></p>
                </article>
                <article">
                    <p class="temp"></p>
                </article>
            </article>
        </header>
        <main>
            <article>
                <h2 class"position"></h2>
                <p class"vejrtype"></p>
            </article>

            <article class="hjul">
                <div>
                    <img src="assets/image/vindpust.png" alt="">
                    <p class"vindhastighed"></p>
                </div>
                <div>
                    <h2 class"grader"></h2>
                    <p class"tid"></p>
                </div>
            </article>
            <article class"vindretning">
                <div>bruges til vindretningspil</div>
            </article>

        </main>
    </section>
    
    `;

    const section = myApp.querySelector('section');
    section.classList.add('mobilview');
};









export function BuildTabletView() {
    myApp.innerHTML = `<section><h2>Hej fra Tablet</h2></section>`;

    const section = myApp.querySelector('section');
    section.classList.add('tabletview');
};

export function BuildPcView() {
 myApp.innerHTML = `<section><h2>Hej fra PC</h2></section>`;

    const section = myApp.querySelector('section');
    section.classList.add('pcview');
};