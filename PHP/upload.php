<?php
// In PHP versions earlier than 4.1.0, $HTTP_POST_FILES should be used instead
// of $_FILES.

if(!isset($_POST["save"])){
$uploaddir = "../uploads/";
$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);

if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
    echo 1;
} else {
	echo 0;
    //echo "Possible file upload attack!\n";
}
}
else{
	echo "Submit button is set.";
}

//echo 'Here is some more debugging info:';
//print_r($_FILES);

//print "</pre>";

?>