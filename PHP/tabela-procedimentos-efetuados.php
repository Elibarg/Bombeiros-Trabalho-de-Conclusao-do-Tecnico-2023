<?php
include("conecta.php");

$TodosOsValoresPef = $_POST['TodosOsValoresPef'];
$Paciente = $_POST['Paciente'];
$Bombeiro = $_POST['Bombeiro'];

$stmt = $pdo->prepare("INSERT INTO procedimentos_efetuados
(TodosOsValoresPef, cpf_paciente, bombeiro) VALUES 
(?, ?, ?)");
$stmt->execute([
    $TodosOsValoresPef, $Paciente, $Bombeiro
]);
?>
