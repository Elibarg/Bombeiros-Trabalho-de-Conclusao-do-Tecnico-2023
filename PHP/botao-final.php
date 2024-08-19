<?php
include("conecta.php");
$NomePaciente = $_POST['NomePaciente'];

// Executa o INSERT na tabela paciente
$stmtInsert = $pdo->prepare("INSERT INTO paciente (nome_paciente) VALUES (?)");
$executouInsert = $stmtInsert->execute([$NomePaciente]);

if ($executouInsert) {
    // Se o INSERT foi bem-sucedido, realiza a segunda consulta para obter o CPF
    $stmtSelect = $pdo->prepare("SELECT cpf_paciente FROM paciente WHERE nome_paciente = ?");
    $stmtSelect->execute([$NomePaciente]);
    $cpfPaciente = $stmtSelect->fetchColumn(); // Obtém o CPF

    echo json_encode(["sucesso" => true, "cpf_paciente" => $cpfPaciente]);
} else {
    echo json_encode(["sucesso" => false]);
}

?>