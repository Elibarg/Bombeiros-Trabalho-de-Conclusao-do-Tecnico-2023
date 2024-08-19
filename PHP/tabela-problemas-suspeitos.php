<?php
include("conecta.php");

$Respiratorio = $_POST['Respiratorio'];
$Diabete = $_POST['Diabete'];
$Obsterico = $_POST['Obsterico'];
$Transporte = $_POST['Transporte'];
$Outro = $_POST['Outro'];
$Psiquiatrico = $_POST['Psiquiatrico'];
$Paciente = $_POST['Paciente'];
$Bombeiro = $_POST['Bombeiro'];

$stmt = $pdo->prepare("INSERT INTO problemas_suspeitos
(Psiquiatrico, Respiratorio, Diabete, Obsterico, Transporte, Outro, cpf_paciente, bombeiro) VALUES 
(?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->execute([
     $Psiquiatrico, $Respiratorio, $Diabete, $Obsterico, $Transporte, $Outro, $Paciente, $Bombeiro
]);
?>
