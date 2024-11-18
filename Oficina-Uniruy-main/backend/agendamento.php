<?php
// Receber os dados do formulário
$nome = $_POST['nome'];
$email = $_POST['email'];
$veiculo = $_POST['veiculo'];
$servico = $_POST['servico'];
$data = $_POST['data'];
$hora = $_POST['hora'];

// Simulação de inserção no banco de dados
// Aqui você pode conectar ao banco de dados e salvar os dados recebidos
// Exemplo: (usando PDO ou MySQLi para conectar ao banco)

// $dsn = 'mysql:host=localhost;dbname=oficina';
// $username = 'root';
// $password = '';
// try {
//     $pdo = new PDO($dsn, $username, $password);
//     $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//     $stmt = $pdo->prepare("INSERT INTO agendamentos (nome, email, veiculo, servico, data, hora) VALUES (?, ?, ?, ?, ?, ?)");
//     $stmt->execute([$nome, $email, $veiculo, $servico, $data, $hora]);
// } catch (PDOException $e) {
//     echo 'Erro: ' . $e->getMessage();
// }

// Para fins de demonstração, vamos apenas exibir os dados:
echo "Agendamento realizado com sucesso!<br>";
echo "Nome: " . $nome . "<br>";
echo "E-mail: " . $email . "<br>";
echo "Veículo: " . $veiculo . "<br>";
echo "Serviço: " . $servico . "<br>";
echo "Data: " . $data . "<br>";
echo "Hora: " . $hora . "<br>";
?>
