<?php
include("conecta.php");

$acesso = $_POST['acesso'];
$nome = $_POST['nome'];
$senha = $_POST['senha'];


// Verifique se o registro com a chave de acesso existe
$stmt_select = $pdo->prepare("SELECT * FROM cadastro WHERE cod_cadastro = ?");
$stmt_select->execute([$acesso]);

if ($stmt_select->rowCount() >= 1) {
    // O registro com a chave de acesso existe, então atualize os valores
    $stmt_update = $pdo->prepare("UPDATE cadastro SET senha_cadastro = ?, nome_cadastro = ? WHERE cod_cadastro = ?");
    $stmt_update->execute([$senha, $nome, $acesso]);
    
    echo json_encode(array('success' => "Edição Realizada!"));
} else {
    echo json_encode(array('error' => 'Chave de Acesso Indisponível'));
}
?>