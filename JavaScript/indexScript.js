//This function operates on the login button

function login(){

var obj=document.getElementById("nam").name+"="+document.getElementById("nam").value+"&"+document.getElementById("pass").name+"="+document.getElementById("pass").value;

//Creating the XMLHttpRequest object
var oReq = new XMLHttpRequest();

/*
readyState=>	Holds the status of the XMLHttpRequest. 
			0: request not initialized 
			1: server connection established
			2: request received 
			3: processing request 
			4: request finished and response is ready
status=>	200: "OK"
			403: "Forbidden"
			404: "Page not found"
			For a complete list go to the Http Messages Reference
The function will execute when the ready state changes*/
			
oReq.onreadystatechange=function(){
	if(this.readyState==4 && this.status==200)
	{
		var result=this.responseText;
		
		if(result==1)
		{
			location.href="postLogin.html";
		}

		else if(result==0)
		{
			alert("Wrong email/password combination.");
		}

		else 
			alert("Unable to authenticate.");
	}
};
oReq.open("POST", "PHP/indexValidiation.php","true");
/*application/x-www-form-urlencoded	Default. All characters are encoded before sent (spaces are converted to "+" symbols, and special characters are converted to ASCII HEX values)
multipart/form-data	No characters are encoded. This value is required when you are using forms that have a file upload control
text/plain	Spaces are converted to "+" symbols, but no special characters are encoded*/

oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
oReq.send(obj);

}
