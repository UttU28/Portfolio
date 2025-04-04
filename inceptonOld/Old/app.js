const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');

    burger.addEventListener('click', () => {
    console.log("hii");
    nav.classList.toggle('nav-active');
    });
}

navSlide();