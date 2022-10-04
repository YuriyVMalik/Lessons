"use strict";

addEventOnclickContentHeaderSlide();

function addEventOnclickContentHeaderSlide() {
    const theme__button = document.querySelector(".theme__button");

    theme__button.addEventListener('click', theme);
}

function theme() { 
  let websiteheader   = document.querySelector(".website_2-header");
  let websitemain     = document.querySelector(".website_2-main");
  let websitefooter   = document.querySelector(".website_2-footer");

  

  if (websitemain.style.background === "") {
    websitemain.style.background   = "black";
    websiteheader.style.background = "black";
    websitefooter.style.background = "black";
  }else if (websitemain.style.background === "black"){
    websitemain.style.background   = "#1F2E35";
    websiteheader.style.background = "#1F2E35";
    websitefooter.style.background = "#1F2E35";
  }else if (websitemain.style.background === "rgb(31, 46, 53)"){
    websitemain.style.background   = "black";
    websiteheader.style.background = "black";
    websitefooter.style.background = "black"; 
  }
}
