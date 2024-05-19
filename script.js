const mobile = document.querySelector(".mobile")
const navBar = document.querySelector(".nav-bar")


mobile.addEventListener("click",function(){
        navBar.classList.toggle("open")
        mobile.classList.toggle("fa-xmark")

})


window.addEventListener("scroll",function(){
    navBar.classList.remove("open")
    mobile.classList.remove("fa-xmark")


})








window.addEventListener('scroll', function() {
    const navbar = document.querySelector('#header');
    if (window.scrollY > 80) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
