const navSlide = () => {
    const menu = document.getElementById('menu');
    const nav = document.getElementById('nav-list');
    const navLink = document.querySelector(".navlink");


    menu.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        menu.classList.toggle("toggle");
    })


}
navSlide();