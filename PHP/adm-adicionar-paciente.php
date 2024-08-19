<?php
include("conecta.php");

$nome = $_POST['nome'];
$id = $_POST['id'];

$stmt = $pdo->prepare("INSERT INTO paciente
(cpf_paciente, nome_paciente) VALUES 
(?, ?)");
$stmt->execute([
    $id, $nome
]);

if ($stmt->rowCount() >= 1) {
    echo json_encode(array('success' => true));
}else {
    echo json_encode(array('error' => 'Chave de Acesso Indisponível'));
}
?>