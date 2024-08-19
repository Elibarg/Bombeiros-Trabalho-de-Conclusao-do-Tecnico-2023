<?php
include("conecta.php");

$nome = $_POST['nome'];
$id = $_POST['acesso'];

// Verifique se o registro com a chave de acesso existe
$stmt_select = $pdo->prepare("SELECT * FROM paciente WHERE cpf_paciente = ?");
$stmt_select->execute([$id]);

if ($stmt_select->rowCount() >= 1) {
    // O registro com a chave de acesso existe, então atualize os valores
    $stmt_update = $pdo->prepare("UPDATE paciente SET nome_paciente = ? WHERE cpf_paciente = ?");
    $stmt_update->execute([$nome, $id]);
    
    echo json_encode(array('success' => true));
} else {
    echo json_encode(array('error' => 'Chave de Acesso Indisponível'));
}
?>
