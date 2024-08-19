<?php
include("conecta.php");

$DisturbioDeComportamento = $_POST['DisturbioDeComportamento'];
$EncontradoDeCapacete = $_POST['EncontradoDeCapacete'];
$EncontradoDeCinto = $_POST['EncontradoDeCinto'];
$ParaBrisasAvariado = $_POST['ParaBrisasAvariado'];
$VolanteTorcido = $_POST['VolanteTorcido'];
$CaminhandoNaCena = $_POST['CaminhandoNaCena'];
$PainelAvariado = $_POST['PainelAvariado'];
$Paciente = $_POST['Paciente'];
$Bombeiro = $_POST['Bombeiro'];

$stmt = $pdo->prepare("INSERT INTO avaliacao_cinematica
(DisturbioDeComportamento, EncontradoDeCapacete, EncontradoDeCinto, ParaBrisasAvariado,
VolanteTorcido, CaminhandoNaCena, PainelAvariado, cpf_paciente, bombeiro) VALUES 
(?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->execute([
    $DisturbioDeComportamento, $EncontradoDeCapacete, $EncontradoDeCinto, $ParaBrisasAvariado,
    $VolanteTorcido, $CaminhandoNaCena, $PainelAvariado, $Paciente, $Bombeiro
]);
?>
