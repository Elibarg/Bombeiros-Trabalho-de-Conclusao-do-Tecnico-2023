<?php
include("conecta.php");

$stmt = $pdo->prepare('SELECT paciente.cpf_paciente, paciente.nome_paciente, 
COALESCE(tabela_paciente.bombeiro, \'Sem registro\') as bombeiro, 
COALESCE(tabela_paciente.data_paciente, \'Sem registro\') as data_paciente
FROM paciente
LEFT JOIN tabela_paciente ON paciente.cpf_paciente = tabela_paciente.cpf_paciente ORDER BY paciente.nome_paciente DESC');
$stmt->execute();

$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data);
?>
