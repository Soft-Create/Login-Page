<?php
$userId=$_POST["userId"];
$password=$_POST["password"];

//Create Connection
$conn=mysqli_connect("localhost","root","","login_details");//new mysqli is also valid


//Check Connection
if(!$conn){
	echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    exit;
}


//Querying if the account exists
if($result=mysqli_query($conn,"SELECT firstName FROM userdata WHERE email='{$userId}' AND password= '{$password}'")){
	
	if(mysqli_num_rows($result)==1)
	{
	echo 1;
	}
	else{
		echo 0;
	}
}

else
{
	echo 2;
}
mysqli_close($conn);
?>