<?php
include("conecta.php");
$TermoRecusa = $_POST['TermoRecusa'];
$AssinaturaRecusa = $_POST['Imagem'];
$TestemunhaRecusa = $_POST['TestemunhaRecusa'];
$DocRecusa = $_POST['DocRecusa'];
$TestemunhaRecusa2 = $_POST['TestemunhaRecusa2'];
$DocRecusa2 = $_POST['DocRecusa2'];
$Bombeiro = $_POST['Bombeiro'];
$Paciente = $_POST['Paciente'];

$stmt = $pdo->prepare("INSERT INTO termo_recusa 
(termo_recusa, assinatura_recusa,
testemunha_recusa, doc_recusa, testemunha_recusa2, doc_recusa2, bombeiro, cpf_paciente) VALUES 
(?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->execute([
    $TermoRecusa, $AssinaturaRecusa,
    $TestemunhaRecusa, $DocRecusa, $TestemunhaRecusa2, $DocRecusa2, $Bombeiro, $Paciente
]);
?>