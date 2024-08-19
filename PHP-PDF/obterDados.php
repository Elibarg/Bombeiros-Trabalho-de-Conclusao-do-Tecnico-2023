<?php
    include("conecta.php");

    $id = $_GET['id'];
    $idBombeiro = $_GET['idBombeiro'];

    $requisicao = $pdo->prepare("SELECT * FROM tabela_paciente WHERE cpf_paciente = :id");
    $requisicao->bindParam(":id", $id);
    $requisicao->execute();

    $dados = $requisicao->fetchAll(PDO::FETCH_ASSOC);

    $requisicao2 = $pdo->prepare("SELECT nome_cadastro FROM cadastro WHERE cod_cadastro = :id");
    $requisicao2->bindParam(':id', $idBombeiro);
    $requisicao2->execute();

    $nomeBombeiro = $requisicao2->fetch(PDO::FETCH_ASSOC);

    if ($nomeBombeiro !== false) {
        $dados[0]['nome_cadastro'] = $nomeBombeiro['nome_cadastro'];
    }

    echo json_encode($dados);
?>
