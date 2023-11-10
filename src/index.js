import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector(".loader");
  preloader.style.display = "none";
  console.log("bitch");
});

window.addEventListener("beforeunload", () => {
  const preloader = document.querySelector(".loader");
  preloader.style.display = "block";
});
