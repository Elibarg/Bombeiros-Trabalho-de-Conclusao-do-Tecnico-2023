<?php
include("conecta.php");

$OutroText = $_POST['OutroText'];
$CateterTpOculos = $_POST['CateterTpOculos'];
$CompressaComum = $_POST['CompressaComum'];
$LuvasDescartaveis = $_POST['LuvasDescartaveis'];
$MascarasDesc = $_POST['MascarasDesc'];
$MantaAlumiada = $_POST['MantaAlumiada'];
$PasDoDea = $_POST['PasDoDea'];
$SondaDeAspiracao = $_POST['SondaDeAspiracao'];
$SoroFisiologico = $_POST['SoroFisiologico'];
$Atadura1 = $_POST['Atadura1'];
$Kit1 = $_POST['Kit1'];
$Tala1 = $_POST['Tala1'];
$Paciente = $_POST['Paciente'];
$Bombeiro = $_POST['Bombeiro'];

$stmt = $pdo->prepare("INSERT INTO material_utilizados_descartavel
(OutroText, CateterTpOculos, CompressaComum, LuvasDescartaveis, MascarasDesc, MantaAlumiada,
PasDoDea, SondaDeAspiracao, SoroFisiologico, Atadura1, Kit1, Tala1, cpf_paciente, bombeiro) VALUES 
(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->execute([
    $OutroText, $CateterTpOculos, $CompressaComum, $LuvasDescartaveis, $MascarasDesc, $MantaAlumiada,
    $PasDoDea, $SondaDeAspiracao, $SoroFisiologico, $Atadura1, $Kit1, $Tala1,  $Paciente, $Bombeiro
]);
?>
