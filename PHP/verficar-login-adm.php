<?php
    include("conecta.php");

    $id = $_POST['id'];
    $senha = $_POST['senha'];

    $verificacao = $pdo->prepare("SELECT * FROM cadastro WHERE cod_cadastro = :id AND senha_cadastro = :senha AND admin = 's'");
    $verificacao->bindParam(":id", $id);
    $verificacao->bindParam(":senha", $senha);
    $verificacao->execute();

    if ($verificacao->rowCount() >= 1) {

        $verificacao = $pdo->prepare("UPDATE cadastro SET acesso_cadastro = ' '");
        $verificacao->execute();
    
        $verificacao = $pdo->prepare("UPDATE cadastro SET acesso_cadastro = 's' WHERE :id = cod_cadastro");
        $verificacao->bindParam(':id', $id);
        $verificacao->execute();
    
        echo json_encode(array('success' => true));
    } else {
        echo json_encode(array('error' => 'Código ou senha incorretos'));
    }

?>