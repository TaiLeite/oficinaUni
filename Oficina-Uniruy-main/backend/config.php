<?php
$host = 'localhost';
$dbname = 'oficina_mecanica';
$user = 'root'; // Alterar se necessário
$password = ''; // Alterar se necessário

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erro na conexão com o banco de dados: " . $e->getMessage());
}
?>