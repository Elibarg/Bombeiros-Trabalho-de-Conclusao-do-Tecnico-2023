<?php
include("conecta.php");

$Ocorrido = $_POST['Ocorrido'];
$Ocorrencia = $_POST['Ocorrencia'];
$Aconteceu = $_POST['Aconteceu'];
$ProblemaSaude = $_POST['ProblemaSaude'];
$Medicamento = $_POST['Medicamento'];
$Alergia = $_POST['Alergia'];
$Liquido = $_POST['Liquido'];
$Paciente = $_POST['Paciente'];
$Bombeiro = $_POST['Bombeiro'];

$stmt = $pdo->prepare("INSERT INTO anamnese
(ocorrido_anamnese, ocorrencia_anamnese, aconteceu_anamnese, problema_saude_anamnese,
medicamento_anamnese, alergia_anamnese, liquido_anamnese, cpf_paciente, bombeiro) VALUES 
(?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->execute([
$Ocorrido, $Ocorrencia, $Aconteceu, $ProblemaSaude, $Medicamento, $Alergia,
$Liquido, $Paciente, $Bombeiro
]);
?>
