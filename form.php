<?php



// servername => localhost
// username => root
// password => empty
// database name => registro
$conn = mysqli_connect("localhost", "root", "", "registro");

// Verificar a conexão 
if($conn === false){
    die("ERROR: Could not connect. " 
        . mysqli_connect_error());
}

// Inicializando a variável $_POST['subject']
$_POST['subject'] = isset($_POST['subject']) ? $_POST['subject'] : null;
if ($_POST['subject']) {
   // echo "armazenar '{$_POST['subject']}'";
   $subject = $_POST['subject'];
} else {
   // echo "não armazenar nada!";
   $subject = $_POST['subject'];
}

$id = '0';
$name = $_POST['name'];
$lastname = $_POST['lastname'];
$company = $_POST['company'];
$arecode = $_POST['arecode'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$newCustomer = $_POST['newCustomer'];

// Executando a execução da consulta de inserção
// Aqui o nome da nossa TABELA é registros 
$sql = "INSERT INTO dados VALUES ('$id','$name','$lastname','$company','$arecode','$phone', '$subject','$newCustomer','$email')";
    
if(mysqli_query($conn, $sql)){
    echo "<h3>Cadastrado com sucesso</h3>"; 
} else{
    echo "ERRO: $sql. " 
        . mysqli_error($conn);
}
    
// Fechar conexão com o BD
mysqli_close($conn);

//var_dump($_POST);

?>