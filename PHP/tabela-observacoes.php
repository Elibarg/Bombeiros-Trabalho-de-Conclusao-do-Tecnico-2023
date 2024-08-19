<?php
include("conecta.php");

$observacoes_importantes = $_POST['TextoDentroObs'];
$Paciente = $_POST['Paciente'];
$Bombeiro = $_POST['Bombeiro'];

$stmt = $pdo->prepare("INSERT INTO observacoes_importantes
(observacoes_importantes, cpf_paciente, bombeiro) VALUES 
(?, ?, ?)");
$stmt->execute([
    $observacoes_importantes, $Paciente, $Bombeiro
]);
?>
