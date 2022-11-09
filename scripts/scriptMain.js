// hamburger menu open dicht// 


var menuButton = document.querySelector("header > button:nth-of-type(1)"); 

// 
menuButton.addEventListener("click", toggleMenu); 

function toggleMenu(){

    var deNav = document.querySelector("header nav"); 

    deNav.classList.toggle("open");
    
}

// halloween theme // 

var halloweenButton = document.querySelector("header nav ul li div button:last-of-type"); 

halloweenButton.addEventListener("click", Halloweentheme); 

function Halloweentheme(){

    var deBody = document.querySelector("body"); 

    deBody.classList.toggle("halloween");
    
}

