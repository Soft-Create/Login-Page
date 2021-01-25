<?php

$fname=$_POST["Fname"];
$lname=$_POST["Lname"];
$email=$_POST["Email"];
$password=$_POST["Password"];

//Create Connection
$conn=new mysqli("localhost","root","","login_details");

//Check Connection
if($conn->connect_error){
	die('Connection error:'.$conn->connect_error);
}

//Querying if the account already exists
$verify="SELECT * FROM userdata WHERE email=$email";
if($conn->query($verify)!=null){
	echo 0;
}

//If the email does not already exist
else{
	$sql="INSERT INTO userdata (firstName,lastName,email,password)VALUES('$fname','$lname','$email','$password')";
	if ($conn->query($sql) === TRUE) {
	    echo 1;
	} 
	else {
		echo "Connection Error";
	}
}
$conn->close();
?>