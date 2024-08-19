<?php
include("conecta.php");

$PeriodoGestacao = $_POST['PeriodoGestacao'];
$PreNatal = $_POST['PreNatal'];
$NomeMedico = $_POST['NomeMedico'];
$Complicacoes = $_POST['Complicacoes'];
$Filhos = $_POST['Filhos'];
$ContracaoDuracao = $_POST['ContracaoDuracao'];
$ContracaoIntervalo = $_POST['ContracaoIntervalo'];
$Evacuacao = $_POST['Evacuacao'];
$RupturaBolsa = $_POST['RupturaBolsa'];
$InspecaoVisual = $_POST['InspecaoVisual'];
$PartoRealizado = $_POST['PartoRealizado'];
$HoraNascimento = $_POST['HoraNascimento'];
$SexoBebe = $_POST['SexoBebe'];
$NomeBebe = $_POST['NomeBebe'];
$Paciente = $_POST['Paciente'];
$Bombeiro = $_POST['Bombeiro'];

$stmt = $pdo->prepare("INSERT INTO anamnese_gestacional
(periodo_gestacao, pre_natal, nome_medico, complicacoes, filhos,
contracao_duracao, contracao_intervalo, evacuacao, ruptura_bolsa, inspecao_visual,
parto_realizado, hora_nascimento, sexo_bebe, nome_bebe, cpf_paciente, bombeiro) VALUES 
(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->execute([
    $PeriodoGestacao, $PreNatal, $NomeMedico, $Complicacoes, $Filhos, $ContracaoDuracao,
    $ContracaoIntervalo, $Evacuacao, $RupturaBolsa, $InspecaoVisual, $PartoRealizado,
    $HoraNascimento, $SexoBebe, $NomeBebe, $Paciente, $Bombeiro
]);
?>