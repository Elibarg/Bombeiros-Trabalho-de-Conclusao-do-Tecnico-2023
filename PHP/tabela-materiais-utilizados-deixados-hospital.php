<?php
include("conecta.php");

$BaseEstabilizador = $_POST['BaseEstabilizador'];
$Colar1 = $_POST['Colar1'];
$Colar2 = $_POST['Colar2'];
$CoxinsStab = $_POST['CoxinsStab'];
$KED = $_POST['KED'];
$MacaRigida = $_POST['MacaRigida'];
$TiranteAranha = $_POST['TiranteAranha'];
$TiranteCabeca = $_POST['TiranteCabeca'];
$SondaAspiracao = $_POST['SondaAspiracao'];
$Canula = $_POST['Canula'];
$OutroMUB = $_POST['OutroMUB'];
$Paciente = $_POST['Paciente'];
$Bombeiro = $_POST['Bombeiro'];

$stmt = $pdo->prepare("INSERT INTO materiais_utilizados_deixados_hospital
(BaseEstabilizador, Colar1, Colar2, CoxinsStab, KED, MacaRigida, TiranteAranha,
TiranteCabeca, SondaAspiracao, Canula, OutroMUB, cpf_paciente, bombeiro) VALUES 
(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->execute([
    $BaseEstabilizador, $Colar1, $Colar2, $CoxinsStab, $KED, $MacaRigida, $TiranteAranha,
    $TiranteCabeca, $SondaAspiracao, $Canula, $OutroMUB, $Paciente, $Bombeiro
]);
?>
