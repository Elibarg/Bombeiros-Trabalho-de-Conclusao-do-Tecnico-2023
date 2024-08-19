<?php
include("conecta.php");

$Conducao = $_POST['Conducao'];
$FormaConducao = $_POST['FormaConducao'];
$Paciente = $_POST['Paciente'];
$Bombeiro = $_POST['Bombeiro'];


$stmt = $pdo->prepare("INSERT INTO forma_conducao
(conducao, forma_conducao, cpf_paciente, bombeiro) VALUES 
(?, ?, ?, ?)");
$stmt->execute([
    $Conducao, $FormaConducao, $Paciente, $Bombeiro
]);
?>
