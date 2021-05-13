var menuButton = document.querySelector(".nav__button");
var mainMenu = document.querySelector(".main-menu");
var countriesSections = Array.from(
  document.querySelectorAll(".travel-description__wrapper")
);

var greeceLink = document.querySelector("#greece-link");
var greeceSection = document.querySelector("#greece");

var albaniaLink = document.querySelector("#albania-link");
var albaniaSection = document.querySelector("#albania");

var macedoniaLink = document.querySelector("#macedonia-link");
var macedoniaSection = document.querySelector("#macedonia");

var montenegroLink = document.querySelector("#montenegro-link");
var montenegroSection = document.querySelector("#montenegro");

var croatiaLink = document.querySelector("#croatia-link");
var croatiaSection = document.querySelector("#croatia");

menuButton.classList.remove("nav__button--open");
menuButton.classList.remove("nav__button--nojs");
mainMenu.classList.add("main-menu--closed");

menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainMenu.classList.toggle("main-menu--closed");
});

window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 1024px)").matches) {
    mainMenu.classList.remove("main-menu--closed");
  }
});

greeceLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  showCountry(greeceSection);
});

albaniaLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  showCountry(albaniaSection);
});

macedoniaLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  showCountry(macedoniaSection);
});

montenegroLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  showCountry(montenegroSection);
});

croatiaLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  showCountry(croatiaSection);
});

const showCountry = function (selectedCountry) {
  selectedCountry.classList.remove("travel-description__wrapper--closed");
  countriesSections
    .filter(function (countrySection) {
      return countrySection !== selectedCountry;
    })
    .forEach(function (countrySection) {
      countrySection.classList.add("travel-description__wrapper--closed");
    });
};
