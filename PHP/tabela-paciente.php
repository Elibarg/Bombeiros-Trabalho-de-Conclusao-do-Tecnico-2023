<?php
include("conecta.php");

$NomeHospitalPaciente = $_POST['NomeHospitalPaciente'];
$Data = $_POST['Data'];
$SexoPaciente = $_POST['SexoPaciente'];
$NomePaciente = $_POST['NomePaciente'];
$IdadePaciente = $_POST['IdadePaciente'];
$RgCpfPaciente = $_POST['RgCpfPaciente'];
$FonePaciente = $_POST['FonePaciente'];
$AcompanhantePaciente = $_POST['AcompanhantePaciente'];
$IdadeAcompanhantePaciente = $_POST['IdadeAcompanhantePaciente'];
$LocalOcorrenciaPaciente = $_POST['LocalOcorrenciaPaciente'];
$NUsbPaciente = $_POST['NUsbPaciente'];
$CodUrPaciente = $_POST['CodUr'];
$NOcorrPaciente = $_POST['NOcorrPaciente'];
$CodPsPaciente = $_POST['CodPs'];
$DespPaciente = $_POST['DespPaciente'];
$HChPaciente = $_POST['HChPaciente'];
$KmFinalPaciente = $_POST['KmFinalPaciente'];
$CodSiaSusPaciente = $_POST['CodSiaSusPaciente'];
$Bombeiro = $_POST['Bombeiro'];
$Paciente = $_POST['Paciente'];

$stmt = $pdo->prepare("INSERT INTO tabela_paciente
(nome_hospital_paciente, data_paciente, sexo_paciente,
nome_paciente, idade_paciente, rg_cpf_paciente,
fone_paciente, acompanhante_paciente, idade_acompanhante_paciente,
local_ocorrencia_paciente, n_usb_paciente, n_ocorr_paciente,
desp_paciente, h_ch_paciente, km_final_paciente,
cod_sia_sus_paciente, cod_ur_paciente, cod_ps_paciente, bombeiro, cpf_paciente) VALUES 
(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->execute([
    $NomeHospitalPaciente, $Data, $SexoPaciente, $NomePaciente, $IdadePaciente,
    $RgCpfPaciente, $FonePaciente, $AcompanhantePaciente, $IdadeAcompanhantePaciente,
    $LocalOcorrenciaPaciente, $NUsbPaciente, $NOcorrPaciente, $DespPaciente, 
    $HChPaciente, $KmFinalPaciente, $CodSiaSusPaciente, $CodUrPaciente, $CodPsPaciente,
    $Bombeiro, $Paciente
]);

?>
