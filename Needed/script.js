window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    });



    const primaryColor = window.localStorage.getItem("primaryColor");
    const root = document.querySelector(':root');
    let colorToSet = 'magenta';

    if (primaryColor === 'blue') {
        colorToSet = 'blue';
    }
    else if (primaryColor === 'green') {
        colorToSet = 'green';
    }

    root.style.setProperty('--primary-color', colorToSet);
})

function toggleTheme() {
    const primaryColor = window.localStorage.getItem("primaryColor");
    let colorToSet;

    if (primaryColor === 'magenta') {
        colorToSet = 'blue';
    }
    else {
        colorToSet = 'magenta';
    }

    window.localStorage.setItem('primaryColor', colorToSet);

    window.location.reload();
}