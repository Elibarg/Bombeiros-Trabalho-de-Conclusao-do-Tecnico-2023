<?php
include("conecta.php");

$id = $_GET['id'];  // Adicione ponto e vírgula no final desta linha

$requisicao = $pdo->prepare("SELECT * FROM anamnese WHERE cpf_paciente = :id");
$requisicao->bindParam(":id", $id);  // Adicione ":" antes de "id"
$requisicao->execute();

$dados = $requisicao->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($dados);
?>