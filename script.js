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
    button.addEventListener("click", showDetails) 
});
        
function showDetails(){
    const projectId = this.getAttribute("data-target");
    const description = document.getElementById(projectId);

    if (description.style.display === "none") {
        description.style.display = "block";
        this.textContent = "Hide Details";
    } else {
        description.style.display = "none";
        this.textContent = "Show Details";
    }
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