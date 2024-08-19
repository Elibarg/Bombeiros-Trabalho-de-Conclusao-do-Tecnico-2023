<?php
    include("conecta.php");

    try {
        $comando = $pdo->prepare("UPDATE cadastro SET Acesso_cadastro = ' ' WHERE Acesso_cadastro = 's'");
        $comando->execute();

        if($comando->rowCount() >= 1){
            echo json_encode(array('success' => "Logout Realizado"));

        } else {
            echo json_encode(array('error' => "Erro ao Tentar Logout"));
        }
    } catch (PDOException $e) {
        echo json_encode(array('error' => "Erro: " . $e->getMessage()));
    }
?>
