<?php
include("conecta.php");

$TextoDentroObj = $_POST['TextoDentroObj'];
$Paciente = $_POST['Paciente'];
$Bombeiro = $_POST['Bombeiro'];

$stmt = $pdo->prepare("INSERT INTO objetos_recolhidos
(TextoDentroObj, cpf_paciente, bombeiro) VALUES 
(?, ?, ?)");
$stmt->execute([
    $TextoDentroObj, $Paciente, $Bombeiro
]);
?>
