"use strict";

//kod för hamburgermenyn

//element
let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");

//eventlyssnare
openBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

//Toggla fram navmeny
function toggleMenu() {
    let navMenuEl = document.getElementById("nav-menu");

    // Hämtar in css för menyn
    let style = window.getComputedStyle(navMenuEl);

    // Kontrollera om nav är synlig elr ej
    if(style.display === "none") {
        navMenuEl.style.display = "block";
    } else {
        navMenuEl.style.display = "none";
    }
}

// Skapar en aktuell klocka som ska visas på hemsidan

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').innerHTML = timeString;
  }
  
  // Updatera klocka varje sekund
  setInterval(updateClock, 1000);
  
  updateClock();