
const btnCriar = document.querySelector("#btnCriar");
const listaPosts = document.querySelector('#listaPosts');
const inputTexto = document.querySelector('#inputTexto');

document.addEventListener('DOMContentLoaded', () => {
            AOS.init({
                duration: 1000,
                easing: 'ease-in-out',
                once: true,
                mirror: false
            });
        });
        
        document.addEventListener("DOMContentLoaded", function() {
            console.log("Streaming page loaded successfully.");
        });
        
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});


        
