// JavaScript Document


/* js voor slider komt van w3schools.com https://www.w3schools.com/howto/howto_js_slideshow.asp */ 

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // verander om de 4 seconden
}





// hamburger menu open dicht// 


var menuButton = document.querySelector("header > button:nth-of-type(1)"); 

menuButton.addEventListener("click", toggleMenu); 

function toggleMenu(){

    var deNav = document.querySelector("header nav"); 

    deNav.classList.toggle("open");
    
}

