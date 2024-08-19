<?php
    include("conecta.php");

    $comando = $pdo->prepare("SELECT * FROM cadastro WHERE Acesso_cadastro = 's'");
    $comando->execute();

    if($comando->rowCount() < 1){
        echo json_encode(array('success' => 'Usuario não conectado'));
    }else{
        echo json_encode(array('error' => 'Usuario conectado'));;
    }
?>