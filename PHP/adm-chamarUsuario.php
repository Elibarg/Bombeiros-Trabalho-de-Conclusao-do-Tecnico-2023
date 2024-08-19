<?php
    include("conecta.php");

    $comando = $pdo->prepare("SELECT nome_cadastro FROM cadastro WHERE Acesso_cadastro = 's'");
    $comando->execute();

    $data = $comando->fetchAll(PDO::FETCH_ASSOC);

    if($comando->rowCount() >= 1){
        
        echo json_encode($data);
    }else{
        echo json_encode(array('error' => 'Usuario não encontrado'));
    }

?>