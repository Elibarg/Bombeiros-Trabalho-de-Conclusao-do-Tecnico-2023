<?php
include("conecta.php");

$id = $_POST['id'];

// Verifique se o registro com a chave de acesso existe
$stmt_select = $pdo->prepare("SELECT * FROM paciente WHERE cpf_paciente = ?");
$stmt_select->execute([$id]);

if ($stmt_select->rowCount() >= 1) {
    // O registro com a chave de acesso existe, então atualize os valores
    $stmt_update = $pdo->prepare("DELETE FROM anamnese_gestacional WHERE anamnese_gestacional.cpf_paciente = :id;
    DELETE FROM anamnese WHERE anamnese.cpf_paciente = :id;
    DELETE FROM avaliacao_paciente_menor WHERE avaliacao_paciente_menor.cpf_paciente = :id;
    DELETE FROM avaliacao_paciente_maior WHERE avaliacao_paciente_maior.cpf_paciente = :id;
    DELETE FROM decisao_transporte WHERE decisao_transporte.cpf_paciente = :id;
    DELETE FROM emergencias WHERE emergencias.cpf_paciente = :id;
    DELETE FROM forma_conducao WHERE forma_conducao.cpf_paciente = :id;
    DELETE FROM localizacao_traumas WHERE localizacao_traumas.cpf_paciente = :id;
    DELETE FROM materiais_utilizados_deixados_hospital WHERE materiais_utilizados_deixados_hospital.cpf_paciente = :id;
    DELETE FROM material_utilizados_descartavel WHERE material_utilizados_descartavel.cpf_paciente = :id;
    DELETE FROM objetos_recolhidos WHERE objetos_recolhidos.cpf_paciente = :id;
    DELETE FROM problemas_suspeitos WHERE problemas_suspeitos.cpf_paciente = :id;
    DELETE FROM procedimentos_efetuados WHERE procedimentos_efetuados.cpf_paciente = :id;
    DELETE FROM sinais_e_sintomas WHERE sinais_e_sintomas.cpf_paciente = :id;
    DELETE FROM sinais_vitais WHERE sinais_vitais.cpf_paciente = :id;
    DELETE FROM tabela_paciente WHERE tabela_paciente.cpf_paciente = :id;
    DELETE FROM termo_recusa WHERE termo_recusa.cpf_paciente = :id;
    DELETE FROM observacoes_importantes WHERE observacoes_importantes.cpf_paciente = :id;
    DELETE FROM avaliacao_cinematica WHERE avaliacao_cinematica.cpf_paciente = :id;
    DELETE FROM objetos_recolhidos_imagem WHERE objetos_recolhidos_imagem.cpf_paciente = :id;
    DELETE FROM paciente WHERE cpf_paciente = :id;");
    $stmt_update->bindParam(":id", $id);
    $stmt_update->execute();
    
    echo json_encode(array('success' => "Paciente excluido com sucesso"));
} else {
    echo json_encode(array('error' => 'Paciente não encontrado'));
}
?>
