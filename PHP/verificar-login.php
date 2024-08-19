<?php
include("conecta.php");

$cod = $_POST['cod'];
$senha = $_POST['senha'];

$stmt = $pdo->prepare("SELECT * FROM cadastro WHERE :cod = cod_cadastro AND :senha = senha_cadastro");
$stmt->bindValue(':cod', $cod);
$stmt->bindValue(':senha', $senha);
$stmt->execute();

if ($stmt->rowCount() >= 1) {

    $stmt = $pdo->prepare("UPDATE cadastro SET acesso_cadastro = ' '");
    $stmt->execute();

    $stmt = $pdo->prepare("UPDATE cadastro SET acesso_cadastro = 's' WHERE :cod = cod_cadastro");
    $stmt->bindValue(':cod', $cod);
    $stmt->execute();

    echo json_encode(array('success' => true));
} else {
    echo json_encode(array('error' => 'Código ou senha incorretos'));
}

?>