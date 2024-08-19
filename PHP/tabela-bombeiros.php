<?php
include("conecta.php");

$stmt = $pdo->prepare("SELECT cod_cadastro FROM cadastro WHERE Acesso_cadastro = 's'");
$stmt->execute();

$data = $stmt->fetch(PDO::FETCH_ASSOC);

echo json_encode($data);
?>
