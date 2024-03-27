document.addEventListener('DOMContentLoaded', function() {
    const nomeInput = document.getElementById('nomeInput');
    const okBtn = document.getElementById('okBtn');
    const mensagem = document.getElementById('mensagem');
    const apagarCookiesBtn = document.getElementById('apagarCookiesBtn');

    const nomeSalvo = getCookie('nome');

    if (nomeSalvo) {
        mensagem.textContent = `Seja bem-vindo ${nomeSalvo}`;
    } else {
        mensagem.textContent = `Seja bem-vindo XX!`;
    }

    okBtn.addEventListener('click', function() {
        const nome = nomeInput.value.trim();

        if (nome !== '') {
            mensagem.textContent = `Seja bem-vindo ${nome}`;
            setCookie('nome', nome, 30);
        } else {
            alert('Por favor, informe seu nome.');
        }
    });

    apagarCookiesBtn.addEventListener('click', function() {
        deleteCookie('nome');
        alert('Cookies apagados com sucesso!');
        location.reload();
    });

    function setCookie(nome, valor, dias) {
        const data = new Date();
        data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));
        const expires = "expires=" + data.toUTCString();
        document.cookie = nome + "=" + valor + ";" + expires + ";path=/";
    }

    function getCookie(nome) {
        const name = nome + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookies = decodedCookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name) == 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }
        return "";
    }

    function deleteCookie(nome) {
        document.cookie = nome + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
});