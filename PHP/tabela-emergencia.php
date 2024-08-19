<?php
header('Content-Type: application/json');
include("conecta.php");

$EmergenciaRegistro = $_POST['EmergenciaRegistro'];
$Paciente = $_POST['Paciente'];
$Bombeiro = $_POST['Bombeiro'];

$stmt = $pdo->prepare("INSERT INTO emergencias
(tipo_emergencia, cpf_paciente, bombeiro) VALUES 
(?, ?, ?)");
$stmt->execute([
    $EmergenciaRegistro,
    $Paciente,
    $Bombeiro
]);
?>