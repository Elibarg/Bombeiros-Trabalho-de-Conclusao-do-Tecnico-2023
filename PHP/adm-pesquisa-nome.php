<?php
include("conecta.php");

$nome = $_GET['nome'];

$stmt = $pdo->prepare('SELECT nome_cadastro, senha_cadastro, cod_cadastro FROM cadastro WHERE nome_cadastro = :nome');
$stmt->bindParam(':nome', $nome);
$stmt->execute();

$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);
?>