document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-soeteador').addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio do formulário

        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);
    


        document.getElementById('resultado-valor').innerHTML = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    });
});