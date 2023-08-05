<?php
require_once "config.php";

$fname = mysqli_real_escape_string($conn, $_POST['registerfname']);
$lname = mysqli_real_escape_string($conn, $_POST['registerlname']);
$age = mysqli_real_escape_string($conn, $_POST['registerAge']);
$email = mysqli_real_escape_string($conn, $_POST['registerEmail']);
$password = mysqli_real_escape_string($conn, $_POST['password']);
$passengerID = mysqli_real_escape_string($conn, $_POST['passengerID']);

$sql = "INSERT INTO user(firstName, lastName, age, email, passengerID, password)
                    VALUES('$fname', '$lname', '$age', '$email' , '$passengerID', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "User registered successfully!";
} else {
    echo "Error " . $sql . "<br/>" . $conn->error;
}

$conn->close();
