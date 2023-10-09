//gloabl
const myApp = document.getElementById('myApp');

function BuildLoadingScreen() {

            const loader = document.querySelector(".loader");
            loader.classList.add("loader-hidden");
            loader.addEventListener("transitionend", () => {
                document.body.removeChild(loader);
     });
}
