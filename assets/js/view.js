// import { DataConversion } from "./weatherdata.controller.js";


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
            <img src="assets/image/sol-op-ned(hvid).png" alt="">
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
                <h2 class="sted"></h2>
                <p class="vejrtype"></p>
            </article>

            <article class="hjul">
                <div class="top-hjul">
                    <img src="assets/image/vindpust.png" alt="">
                    <p class="vindhastighed"></p>
                </div>
                <div class="temperatur">
                    <h2 class="grader"></h2>
                    <p class="tid"></p>
                </div>
                <article class="vindretning">
                    <div>bruges til vindretningspil</div>
                </article>
            </article>
        </main>
        <div id="menu_icon">
        <span id="bgl-1"></span>
        <span id="bgl-2"></span>
        <span id="bgl-3"></span>
      </div>
      <div id="menu_items">
          <ul>
              <button><a href="#">Anden lokalitet</a></button>
              <button><a href="#">Vejret de kommdende dage</a></button>
              <button><a href="#">Vind hastigheder</a></button>
          </ul>
      </div>
    </section>
    
    `;
    const menuIcon = document.getElementById('menu_icon');
    menuIcon.addEventListener('click', () => {
      document.getElementById('menu_items').classList.toggle('active');
      document.getElementById('bgl-1').classList.toggle('rotate');
      document.getElementById('bgl-2').classList.toggle('hidden');
      document.getElementById('bgl-3').classList.toggle('rotate');
    });
    document.addEventListener('DOMContentLoaded', function() {
        createMenu();
      });
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