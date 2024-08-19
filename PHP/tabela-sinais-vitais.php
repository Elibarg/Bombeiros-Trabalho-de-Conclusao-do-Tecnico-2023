<?php
include("conecta.php");

$PressaoArterial = $_POST['PressaoArterial'];
$Pulso = $_POST['Pulso'];
$SegSv = $_POST['SegSv'];
$Respiracao = $_POST['Respiracao'];
$Temperatura = $_POST['Temperatura'];
$Anormal = $_POST['Anormal'];
$Bombeiro = $_POST['Bombeiro'];
$Paciente = $_POST['Paciente'];

$stmt = $pdo->prepare("INSERT INTO sinais_vitais
(PressaoArterial, Pulso, SegSv, Respiracao, Temperatura, cpf_paciente, Anormal, bombeiro) VALUES 
(?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->execute([
    $PressaoArterial, $Pulso, $SegSv, $Respiracao, $Temperatura, $Paciente, $Anormal, $Bombeiro
]);
?>
