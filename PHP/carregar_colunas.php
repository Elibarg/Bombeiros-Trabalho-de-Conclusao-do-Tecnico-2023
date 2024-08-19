<?php
// Conexão com o banco de dados (substitua pelas suas credenciais)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ncge_bombeiros";

// Criando a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

$tabelaSelecionada = $_POST['tabela'];

// Query para obter as colunas da tabela selecionada
$sql = "SHOW COLUMNS FROM $tabelaSelecionada";
$result = $conn->query($sql);

$options = '<option value="">Selecionar Coluna</option>';
while ($row = $result->fetch_assoc()) {
    $options .= '<option value="' . $row['Field'] . '">' . $row['Field'] . '</option>';
}

echo $options;

$conn->close(); // Fecha a conexão com o banco de dados
?>
