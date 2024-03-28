document.addEventListener("DOMContentLoaded", function () {
    language = sessionStorage.getItem("language");
    var english = document.querySelectorAll(".english");
    var spanish = document.querySelectorAll(".spanish");
    var french = document.querySelectorAll(".french");
    var languageSelect = document.getElementById("language-picker-select");
    if (sessionStorage.getItem("language") !== null) {
        if (language === "spanish") {
            spanish.forEach(function (spanishElement) {
                spanishElement.classList.add("display-block");
                spanishElement.classList.remove("display-none");
            });
            english.forEach(function (englishElement) {
                englishElement.classList.remove("display-block");
                englishElement.classList.add("display-none");
            });
            french.forEach(function (frenchElement) {
                frenchElement.classList.remove("display-block");
                frenchElement.classList.add("display-none");
            });
            languageSelect.options[0].selected = true;
            languageSelect.options[1].selected = false;
            languageSelect.options[2].selected = false;
        }
        if (language === "english") {
            english.forEach(function (englishElement) {
                englishElement.classList.add("display-block");
                englishElement.classList.remove("display-none");
            });
            spanish.forEach(function (spanishElement) {
                spanishElement.classList.remove("display-block");
                spanishElement.classList.add("display-none");
            });
            french.forEach(function (frenchElement) {
                frenchElement.classList.remove("display-block");
                frenchElement.classList.add("display-none");
            });
            languageSelect.options[0].selected = false;
            languageSelect.options[1].selected = true;
            languageSelect.options[2].selected = false;
        }
        if (language === "french") {
            french.forEach(function (frenchElement) {
                frenchElement.classList.add("display-block");
                frenchElement.classList.remove("display-none");
            });
            spanish.forEach(function (spanishElement) {
                spanishElement.classList.remove("display-block");
                spanishElement.classList.add("display-none");
            });
            english.forEach(function (englishElement) {
                englishElement.classList.remove("display-block");
                englishElement.classList.add("display-none");
            });
            languageSelect.options[0].selected = false;
            languageSelect.options[1].selected = false;
            languageSelect.options[2].selected = true;
        }
    }
    displayMap();
});


function val() {
    language = document.getElementById("language-picker-select").value;
    var english = document.querySelectorAll(".english");
    var spanish = document.querySelectorAll(".spanish");
    var french = document.querySelectorAll(".french");
    sessionStorage.setItem("language", language);

    if (language === "spanish") {
        spanish.forEach(function (spanishElement) {
            spanishElement.classList.add("display-block");
            spanishElement.classList.remove("display-none");
        });
        english.forEach(function (englishElement) {
            englishElement.classList.remove("display-block");
            englishElement.classList.add("display-none");
        });
        french.forEach(function (frenchElement) {
            frenchElement.classList.remove("display-block");
            frenchElement.classList.add("display-none");
        });
    }
    if (language === "english") {
        english.forEach(function (englishElement) {
            englishElement.classList.add("display-block");
            englishElement.classList.remove("display-none");
        });
        spanish.forEach(function (spanishElement) {
            spanishElement.classList.remove("display-block");
            spanishElement.classList.add("display-none");
        });
        french.forEach(function (frenchElement) {
            frenchElement.classList.remove("display-block");
            frenchElement.classList.add("display-none");
        });
    }
    if (language === "french") {
        french.forEach(function (frenchElement) {
            frenchElement.classList.add("display-block");
            frenchElement.classList.remove("display-none");
        });
        spanish.forEach(function (spanishElement) {
            spanishElement.classList.remove("display-block");
            spanishElement.classList.add("display-none");
        });
        english.forEach(function (englishElement) {
            englishElement.classList.remove("display-block");
            englishElement.classList.add("display-none");
        });
    }
}

function displayMap() {
    var map = L.map("map").setView([19.38982, -99.16580], 20);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        detectRetina: true,
    }).addTo(map);

    L.marker([19.38982, -99.16580]).addTo(map);
}