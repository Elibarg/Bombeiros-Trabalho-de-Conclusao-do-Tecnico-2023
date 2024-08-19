<?php
include("conecta.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $imagens = $_POST['imagens'];
    $Paciente = $_POST['Paciente'];
    $Bombeiro = $_POST['Bombeiro'];

    $stmt = $pdo->prepare("INSERT INTO objetos_recolhidos_imagem (imagem, cpf_paciente, bombeiro) VALUES (?, ?, ?)");
    $stmt->execute([
        $imagens, $Paciente, $Bombeiro
    ]);

}
?>
