document.addEventListener('DOMContentLoaded', function() {
    const nomeInput = document.getElementById('nomeInput');
    const okBtn = document.getElementById('okBtn');
    const mensagem = document.getElementById('mensagem');

    // Verificar se existe um nome salvo na Session
    const nomeSalvo = sessionStorage.getItem('nome');

    if (nomeSalvo) {
        mensagem.textContent = `Seja bem-vindo ${nomeSalvo}`;
    } else {
        mensagem.textContent = `Seja bem-vindo XX!`;
    }

    // Adicionar evento de clique ao botão "OK"
    okBtn.addEventListener('click', function() {
        const nome = nomeInput.value.trim();

        if (nome !== '') {
            mensagem.textContent = `Seja bem-vindo ${nome}`;
            sessionStorage.setItem('nome', nome); // Armazenar o nome na Session
        } else {
            alert('Por favor, informe seu nome.');
        }
    });
});