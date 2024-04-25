<?php
header('Content-Type: application/json');

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];

$response = array('firstname' => $firstname, 'lastname' => $lastname);

echo json_encode($response);

?>



