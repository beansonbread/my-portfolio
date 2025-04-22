document.addEventListener("DOMContentLoaded",function(){var typed=new Typed('#typed',{stringsElement:'#typed-strings',typeSpeed:25,startDelay:1000,backSpeed:0,fadeOut:!0,loop:!1})});document.querySelectorAll(".details").forEach(button=>{button.addEventListener("click",showDetails)});document.querySelectorAll(".details-inner").forEach(button=>{button.addEventListener("click",hideDetails)});function showDetails(){const targetId=this.getAttribute("data-target");const card=document.getElementById(targetId);const title=document.getElementById(`${targetId}-title`);const showButton=document.getElementById(`${targetId}-button`);if(card)card.style.display="block";if(title)title.style.display="none";if(showButton)showButton.style.display="none"}
function hideDetails(){const targetId=this.getAttribute("data-target");const card=document.getElementById(targetId);const title=document.getElementById(`${targetId}-title`);const showButton=document.getElementById(`${targetId}-button`);if(card)card.style.display="none";if(title)title.style.display="block";if(showButton)showButton.style.display="block"}
function validateForm(){const name=document.forms.contactForm.name.value;const email=document.forms.contactForm.email.value
const message=document.forms.contactForm.message.value
if(name==""){alert("Name must be filled out");return!1}
if(email==""){alert("Please provide an email address");return!1}
if(message==""){alert("Please enter a short message");return!1}};

var setVanta = ()=>{
    if (window.VANTA) window.VANTA.BIRDS({
      el: "#about",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: "#bed6dd",
      color1: "#ff9a8b",
      color2: "#fad0c4",
      quantity: 4.00
    })
    }
    setVanta();