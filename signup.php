<?php
// Database connection
$servername = "localhost";
$username = "root"; // Replace with your DB username
$password = "";     // Replace with your DB password
$dbname = "user_database"; // Replace with your DB name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$user = $_POST['username'];
$email = $_POST['email'];
$pass = $_POST['password'];
$confirm_pass = $_POST['confirm_password'];

// Validate passwords match
if ($pass !== $confirm_pass) {
    echo "Passwords do not match. Please try again.";
    exit;
}

// Hash password for security
$hashed_password = password_hash($pass, PASSWORD_DEFAULT);

// Insert data into the database
$sql = "INSERT INTO users (username, email, password) VALUES ('$user', '$email', '$hashed_password')";

if ($conn->query($sql) === TRUE) {
    echo "Sign-up successful! You can now <a href='login.html'>log in</a>.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
