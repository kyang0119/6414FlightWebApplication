<?php
$server = "localhost";
$username = "root";
$pass = "";
$dbname = "myWebApp";

//create connection for mysqli
$conn = new mysqli($server, $username, $pass, $dbname);

//checking connection 
if ($conn->connect_error) {
    die("Connection failed:" . $conn->connect_error);
}
