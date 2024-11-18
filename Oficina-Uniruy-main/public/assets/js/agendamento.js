// Função para validar o agendamento
function validarAgendamento(event) {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const veiculo = document.getElementById('veiculo').value;
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const errorMessage = document.getElementById('error-message');

    if (!nome || !email || !veiculo || !servico || !data || !hora) {
        event.preventDefault(); // Impede o envio do formulário
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.style.display = 'block';
    } else {
        // Limpar a mensagem de erro, caso os dados estejam corretos
        errorMessage.style.display = 'none';
    }
}

// Adicionando evento para validação no formulário
window.onload = function () {
    const agendamentoForm = document.getElementById('agendamento-form');
    
    if (agendamentoForm) {
        agendamentoForm.addEventListener('submit', validarAgendamento);
    }
};
