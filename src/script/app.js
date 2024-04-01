import { chartSvg, shortSvg } from "./chartSvg.js";
let searchInput = document.getElementById("search-bar");
let recentSearchField = document.getElementById("search-variant-field");
let fullScreenButton = document.getElementById("full-screen");
let darkMode = document.querySelector("#dark-mode");
let bottomHeader = document.querySelector(".bottom-header");
let main = document.querySelector("main");
let svgContainer = document.querySelector(".chart-container");
let taskSvgContainer = document.querySelector(".task-center");
let darkModeIcon = document.querySelector("#dark-mode i");
let sunIcon = document.querySelector("#dark-mode #sunIcon");

// note:When the page load the method worked
document.addEventListener("DOMContentLoaded", runToAllEvents);

function runToAllEvents() {
  window.addEventListener("load", appenSvgImageToDom);
  searchInput.addEventListener("focus", showRecentSearchField);
  bottomHeader.addEventListener("click", HideRecentSearchField);
  main.addEventListener("click", HideRecentSearchField);
  fullScreenButton.addEventListener("click", FullScreenMode);
  darkMode.addEventListener("click", darkModeActive);
}
// note:Show the Recent Search Field
function showRecentSearchField(e) {
  if (e.target) {
    recentSearchField.classList.add("show-recent-search-field");
  }
}
// note:Hide the Recent Search Field
function HideRecentSearchField(e) {
  if (e.target) {
    recentSearchField.classList.remove("show-recent-search-field");
  }
}
//note:Fullscreen Mode Method
function FullScreenMode(e) {
  document.documentElement.requestFullscreen({ navigationUI: "show" });
}
//note: Color Switcher Method
function darkModeActive(e) {
  if (e.target) {
    main.classList.toggle("dark");
  }
}
//note:Append The SVG To DOM Method
function appenSvgImageToDom(e) {
  if (e.target) {
    svgContainer.innerHTML = chartSvg;
    taskSvgContainer.innerHTML = shortSvg;
  }
}
