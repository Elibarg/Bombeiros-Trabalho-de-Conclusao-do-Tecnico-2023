<?php
include("conecta.php");

$AberturaOcular = $_POST['AberturaOcular'];
$RespostaVerbal = $_POST['RespostaVerbal'];
$RespostaMotora = $_POST['RespostaMotora'];
$ValorGCS = $_POST['ValorGCS'];
$Paciente = $_POST['Paciente'];
$Bombeiro = $_POST['Bombeiro'];

$stmt = $pdo->prepare("INSERT INTO  avaliacao_paciente_maior
(AberturaOcular, RespostaVerbal, RespostaMotora, valor_gcs, cpf_paciente, bombeiro) VALUES 
(?, ?, ?, ?, ?, ?)");
$stmt->execute([
    $AberturaOcular, $RespostaVerbal, $RespostaMotora, $ValorGCS, $Paciente, $Bombeiro
]);
?>
