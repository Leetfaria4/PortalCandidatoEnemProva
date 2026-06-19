const inputEmail = document.getElementById('loginEmail');
const inputSenha = document.getElementById('loginSenha');
const formLogin = document.getElementById('formLogin');
const resultado = document.getElementById('resultado-login');
const btnCadastrar = document.getElementById('btnCadastrar');

function validarLogin(event) {
    event.preventDefault();
    const email = inputEmail.value;
    const senha = inputSenha.value;

    if (!email || !senha) {
        resultado.innerText = 'Todos os campos são obrigatórios!';
        return;
    }

    if (!email.includes('@')) {
        resultado.innerText = 'E-mail deve conter @';
        return;
    }

    if (senha.length < 8) {
        resultado.innerText = 'A senha deve ter no mínimo 8 caracteres';
        return;
    }

    resultado.innerText = 'Login realizado com sucesso!';
    localStorage.setItem('usuarioLogado', email);
    
    setTimeout(() => {
        window.location.href = 'enem.html';
    }, 1000);
}

function irParaCadastro() {
    window.location.href = 'enem.html';
}

formLogin.addEventListener('submit', validarLogin);
btnCadastrar.addEventListener('click', irParaCadastro);