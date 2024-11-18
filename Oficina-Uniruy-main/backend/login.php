<?php
// Verifica se o formulário foi submetido via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Dados do formulário
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Simulação de verificação no banco de dados
    $usuarios = [
        'usuario@example.com' => 'senha123', // E-mail e senha fictícios
    ];

    if (array_key_exists($email, $usuarios) && $usuarios[$email] === $password) {
        // Se o login for bem-sucedido, redireciona para o dashboard ou página principal
        header('Location: dashboard.php');
        exit;  // Termina a execução do script para garantir que não haja saída adicional
    } else {
        // Se o login falhar, redireciona de volta para o login com a mensagem de erro
        header('Location: ../login.html?error=true');
        exit;  // Termina a execução do script
    }
}
?>
