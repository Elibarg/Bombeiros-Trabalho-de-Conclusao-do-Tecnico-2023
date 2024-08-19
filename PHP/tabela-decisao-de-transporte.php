<?php
include("conecta.php");

$DecisaoDeTransporteDt = $_POST['DecisaoDeTransporteDt'];
$MDT = $_POST['MDT'];
$S1DT = $_POST['S1DT'];
$S2DT = $_POST['S2DT'];
$S3DT = $_POST['S3DT'];
$DemanteDT = $_POST['DemanteDT'];
$Paciente = $_POST['Paciente'];
$Bombeiro = $_POST['Bombeiro'];

$stmt = $pdo->prepare("INSERT INTO decisao_transporte
(MDT, S1DT, S2DT, S3DT, DemanteDT, DecisaoDeTransporteDt, cpf_paciente, bombeiro) VALUES 
(?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->execute([
$MDT,
$S1DT,
$S2DT,
$S3DT,
$DemanteDT,
$DecisaoDeTransporteDt,
$Paciente,
$Bombeiro
]);
?>