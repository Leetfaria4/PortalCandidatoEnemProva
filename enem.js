const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputTelefone = document.getElementById('telefone');
const inputNomeMae = document.getElementById('nomeMae');
const inputNomePai = document.getElementById('nomePai');
const inputEndereco = document.getElementById('endereco');
const inputNumero = document.getElementById('numero');
const inputCidade = document.getElementById('cidade');
const selectEstado = document.getElementById('estado');
const inputPais = document.getElementById('pais');
const selectSituacaoEM = document.getElementById('situacaoEM');
const selectTipoEscola = document.getElementById('tipoEscola');
const inputSenha = document.getElementById('senha');
const inputConfirmarSenha = document.getElementById('confirmarSenha');
const formCadastro = document.getElementById('formCadastro');
const resultado = document.getElementById('resultado');
const btnVoltar = document.getElementById('btnVoltar');

function salvarFormulario(event) {
    event.preventDefault();
    const nome = inputNome.value;
    const email = inputEmail.value;
    const telefone = inputTelefone.value;
    const nomeMae = inputNomeMae.value;
    const nomePai = inputNomePai.value;
    const endereco = inputEndereco.value;
    const numero = inputNumero.value;
    const cidade = inputCidade.value;
    const estado = selectEstado.value;
    const pais = inputPais.value;
    const situacaoEM = selectSituacaoEM.value;
    const tipoEscola = selectTipoEscola.value;
    const senha = inputSenha.value;
    const confirmarSenha = inputConfirmarSenha.value;

    if (!nome || !email || !telefone || !nomeMae || !nomePai || !endereco || !numero || !cidade || !estado || !pais || !situacaoEM || !tipoEscola || !senha || !confirmarSenha) {
        resultado.innerText = 'Todos os campos são obrigatórios!';
        return;
    }

    resultado.innerText = 'Inscrição salva com sucesso!';
    formCadastro.reset();

    setTimeout(function() {
        window.location.href = 'login.html';
    }, 1500);
}
    
function voltarPagina() {
    window.location.href = 'login.html'; // Mudei pra login
}

formCadastro.addEventListener('submit', salvarFormulario);
btnVoltar.addEventListener('click', voltarPagina); 