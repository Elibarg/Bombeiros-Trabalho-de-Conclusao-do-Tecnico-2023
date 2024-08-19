<?php
include("conecta.php");

$TodosOsValoresSeS = $_POST['TodosOsValoresSeS'];
$Paciente = $_POST['Paciente'];
$Bombeiro = $_POST['Bombeiro'];

$stmt = $pdo->prepare("INSERT INTO sinais_e_sintomas
(TodosOsValoresSeS, cpf_paciente, bombeiro) VALUES 
(?, ?, ?)");
$stmt->execute([
    $TodosOsValoresSeS, $Paciente, $Bombeiro
]);
?>
