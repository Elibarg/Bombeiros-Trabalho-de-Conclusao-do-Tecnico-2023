<?php
include("conecta.php");

$stmt = $pdo->prepare('SELECT nome_cadastro, senha_cadastro, cod_cadastro FROM cadastro ORDER BY nome_cadastro DESC');
$stmt->execute();

$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);
?>