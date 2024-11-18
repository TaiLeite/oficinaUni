// Função de validação para o login
function validarLogin(event) {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Expressão regular para validar e-mail
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Verificar se o e-mail e a senha são válidos
    if (!emailRegex.test(email)) {
        event.preventDefault(); // Impede o envio do formulário
        errorMessage.textContent = 'Por favor, insira um e-mail válido.';
        errorMessage.style.display = 'block';
    } else if (senha.length < 6) {
        event.preventDefault(); // Impede o envio do formulário
        errorMessage.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        errorMessage.style.display = 'block';
    } else {
        // Limpar a mensagem de erro, caso os dados estejam corretos
        errorMessage.style.display = 'none';
    }
}

// Função de validação para o cadastro
function validarCadastro(event) {
    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    const telefone = document.getElementById('phone').value;
    const nascimento = document.getElementById('birthdate').value;
    const errorMessage = document.getElementById('error-message');

    // Expressão regular para validar e-mail
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (nome === '' || email === '' || senha === '' || telefone === '' || nascimento === '') {
        event.preventDefault(); // Impede o envio do formulário
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.style.display = 'block';
    } else if (!emailRegex.test(email)) {
        event.preventDefault();
        errorMessage.textContent = 'Por favor, insira um e-mail válido.';
        errorMessage.style.display = 'block';
    } else if (senha.length < 6) {
        event.preventDefault();
        errorMessage.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        errorMessage.style.display = 'block';
    } else {
        // Limpar a mensagem de erro
        errorMessage.style.display = 'none';
    }
}

// Função para ocultar a mensagem de erro após a digitação
function limparErro() {
    const errorMessage = document.getElementById('error-message');
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
}

// Adicionando eventos para validação nos formulários
window.onload = function () {
    const loginForm = document.getElementById('login-form');
    const cadastroForm = document.getElementById('cadastro-form');

    if (loginForm) {
        loginForm.addEventListener('submit', validarLogin);
    }

    if (cadastroForm) {
        cadastroForm.addEventListener('submit', validarCadastro);
    }

    // Limpar mensagem de erro ao digitar
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', limparErro);
    });
};
