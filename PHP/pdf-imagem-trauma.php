<?php
    include("conecta.php");

    $id = $_GET['id'];

    $requisicao = $pdo->prepare("SELECT trauma_img FROM  localizacao_traumas WHERE cpf_paciente = :id");
    $requisicao->bindParam(':id', $id);
    $requisicao->execute();

    $dados = $requisicao->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($dados);
?>