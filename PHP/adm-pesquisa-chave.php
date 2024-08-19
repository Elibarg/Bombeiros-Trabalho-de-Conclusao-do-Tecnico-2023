<?php
include("conecta.php");

$chave = $_GET['chave'];

$stmt = $pdo->prepare('SELECT nome_cadastro, senha_cadastro, cod_cadastro FROM cadastro WHERE cod_cadastro = :chave');
$stmt->bindParam(':chave', $chave);
$stmt->execute();

$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);
?>