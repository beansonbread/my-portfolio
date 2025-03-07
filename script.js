document.querySelectorAll(".details").forEach(button => {
    button.addEventListener("click", showDetails) 
});
        
function showDetails(){
    let projectId = this.getAttribute("data-target");
    let description = document.getElementById(projectId);

    if (description.style.display === "none") {
        description.style.display = "block";
        this.textContent = "Hide Details";
    } else {
        description.style.display = "none";
        this.textContent = "Show Details";
    }
}
