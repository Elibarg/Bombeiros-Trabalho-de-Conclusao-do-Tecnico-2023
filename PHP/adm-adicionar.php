<?php
    include("conecta.php");

    $nome = $_POST['nome'];
    $senha = $_POST['senha'];
    $acesso = $_POST['acesso'];
    $adm = $_POST['adm'];

    $stmt = $pdo->prepare("INSERT INTO cadastro
    (cod_cadastro, senha_cadastro, nome_cadastro, admin) VALUES 
    (?, ?, ?, ?)");
    $stmt->execute([
        $acesso, $senha, $nome , $adm
    ]);

    if ($stmt->rowCount() >= 1) {
        echo json_encode(array('success' => true));
    }else {
        echo json_encode(array('error' => 'Chave de Acesso Indisponível'));
    }
?>