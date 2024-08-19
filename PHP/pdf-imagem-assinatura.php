<?php
    include("conecta.php");

    $id = $_GET['id'];

    $requisicao = $pdo->prepare("SELECT assinatura_recusa FROM termo_recusa WHERE cpf_paciente = :id");
    $requisicao->bindParam(':id', $id);
    $requisicao->execute();

    $dados = $requisicao->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($dados);
?>