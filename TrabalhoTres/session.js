document.addEventListener('DOMContentLoaded', function() {
    const nomeInput = document.getElementById('nomeInput');
    const okBtn = document.getElementById('okBtn');
    const mensagem = document.getElementById('mensagem');

    const nomeSalvo = sessionStorage.getItem('nome');

    if (nomeSalvo) {
        mensagem.textContent = `Seja bem-vindo ${nomeSalvo}`;
    } else {
        mensagem.textContent = `Seja bem-vindo XX!`;
    }

    okBtn.addEventListener('click', function() {
        const nome = nomeInput.value.trim();

        if (nome !== '') {
            mensagem.textContent = `Seja bem-vindo ${nome}`;
            sessionStorage.setItem('nome', nome);  
        } else {
            alert('Por favor, informe seu nome.');
        }
    });
});