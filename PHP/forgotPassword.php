<?php

$fname=$_POST["Fname"];
$lname=$_POST["Lname"];
$email=$_POST["Email"];

//Create Connection
$conn=new mysqli("localhost","root","","login_details");

//Check Connection
if($conn->connect_errno){
	die('Connection error:'.$conn->connect_error);
}

//Querying if the account already exists
$verify="SELECT password FROM userdata WHERE email='$email' AND firstName='$fname' AND lastName='$lname'";
if($result=$conn->query($verify)){

	//Fetch associative array
	while($row = $result->fetch_assoc()){
		//The message to be sent
		$msg="Your password is ".$row["password"];

		//use wordwrap() if lines are longer than 70 characters
		$msg=wordwrap($msg,70);

		//send email
		mail($email,"Account Recovery",$msg);
	}

	//free result set
	$result->free();
	echo 0;
}

//If the email does not exist
else{
	// echo 1;
}
$conn->close();
?>