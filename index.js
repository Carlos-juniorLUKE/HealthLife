// Exemplo de interatividade simples
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Obrigado por entrar em contato! Responderemos em breve.");
});
var elementosDuvida = document.querySelectorAll('.duvida');

elementosDuvida.forEach( function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
}

)