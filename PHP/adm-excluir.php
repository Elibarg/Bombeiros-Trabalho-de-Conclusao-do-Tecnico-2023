<?php
include("conecta.php");

$acesso = $_POST['acesso'];

// Verifique se o registro com a chave de acesso existe
$stmt_select = $pdo->prepare("SELECT * FROM cadastro WHERE cod_cadastro = ?");
$stmt_select->execute([$acesso]);

if ($stmt_select->rowCount() >= 1) {
    // O registro com a chave de acesso existe, então atualize os valores
    $stmt_update = $pdo->prepare("DELETE FROM cadastro WHERE cod_cadastro = ?");
    $stmt_update->execute([$acesso]);
    
    echo json_encode(array('success' => "Bombeiro excluido com sucesso"));
} else {
    echo json_encode(array('error' => 'Bombeiro não encontrado'));
}
?>
