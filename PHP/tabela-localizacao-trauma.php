<?php
include("conecta.php");

$textotrauma = $_POST['textotrauma'];
$queimadura = $_POST['queimadura'];
$imagem = $_POST['imagem'];
$Paciente = $_POST['Paciente'];
$Bombeiro = $_POST['Bombeiro'];

$stmt = $pdo->prepare("INSERT INTO localizacao_traumas
(texto_trauma, queimadura, trauma_img, cpf_paciente, bombeiro) VALUES 
(?, ?, ?, ?, ?)");
$stmt->execute([
    $textotrauma, $queimadura, $imagem, $Paciente, $Bombeiro
]);
?>