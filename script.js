
const btnCriar = document.querySelector("#btnCriar");
const listaPosts = document.querySelector('#listaPosts');
const inputTexto = document.querySelector('#inputTexto');

btnCriar.addEventListener('click', function (infosDoEvento) {
    infosDoEvento.preventDefault();
    criaPost();
});

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
        
