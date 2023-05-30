//const homeButton = document.getElementById("home-button");
// const aboutButton = document.getElementById("about-button");
// const eventButton = document.getElementById("projects-button");
// const contactButton = document.getElementById("contact-button");
// const homeSection = document.getElementById("home");
// const aboutSection = document.getElementById("about");
// const projectsSection = document.getElementById("projects");
// const contactSection = document.getElementById("contact");
// homeButton.addEventListener("click", function() {
//     homeSection.scrollIntoView({behavior: "smooth"});
// });
// aboutButton.addEventListener("click", function() {
//     aboutSection.scrollIntoView({behavior: "smooth"});
// });
// projectsButton.addEventListener("click", function() {
//     projectsSection.scrollIntoView({behavior: "smooth"});
// });
// contactButton.addEventListener("click", function() {    
//     contactSection.scrollIntoView({behavior: "smooth"});
// });

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

history.scrollRestoration = "manual"

