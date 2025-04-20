
/*about section*/
document.addEventListener("DOMContentLoaded", function () {
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 25,
    startDelay: 1000,
    backSpeed: 0,
    fadeOut: true,
    loop: false
  });
});   

/*projects section*/
document.querySelectorAll(".details").forEach(button => {
    button.addEventListener("click", showDetails);
});

document.querySelectorAll(".details-inner").forEach(button => {
    button.addEventListener("click", hideDetails);
});

function showDetails() {
    const targetId = this.getAttribute("data-target");
    const card = document.getElementById(targetId);
    const title = document.getElementById(`${targetId}-title`);
    const showButton = document.getElementById(`${targetId}-button`);

    if (card) card.style.display = "block";
    if (title) title.style.display = "none";
    if (showButton) showButton.style.display = "none";
}

function hideDetails() {
    const targetId = this.getAttribute("data-target");
    const card = document.getElementById(targetId);
    const title = document.getElementById(`${targetId}-title`);
    const showButton = document.getElementById(`${targetId}-button`);

    if (card) card.style.display = "none";
    if (title) title.style.display = "block";
    if (showButton) showButton.style.display = "block";
}

/*contact section*/
function validateForm() {
    const name = document.forms["contactForm"]["name"].value;
    const email = document.forms["contactForm"]["email"].value
    const message = document.forms["contactForm"]["message"].value
    if (name == "") {
        alert("Name must be filled out");
        return false;
    } 
    if (email =="") {
        alert ("Please provide an email address");
        return false;
    }
    if (message =="") {
        alert ("Please enter a short message");
        return false;
    }
}