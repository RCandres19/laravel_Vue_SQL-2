<?php

$host = "localhost";
$usuario = "root";
$password = "20051020";
$base_datos = "CultivaSena";

$conn = new mysqli($host, $usuario, $password, $base_datos);

if ($conn->connect_error) {
	die(" Error de conexion: " . $conn->connect_error);
} else {
	echo "Conexion exitosa a la base de datos '$base_datos'";
}

$conn->close();
?>

