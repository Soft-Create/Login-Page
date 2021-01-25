//This is a validiation function for the form elements
function validateForm() {
			var x = document.getElementById("email").value;
			var atpos = x.indexOf("@");
			var dotpos = x.lastIndexOf(".");
			var p=document.getElementById("password").value;
			var cp=document.getElementById("cpassword").value;
			var k=0;

			if(true){
			if((document.getElementById("fname").value).length<2||(document.getElementById("lname").value).length<3)
			{
				document.getElementById("nErr").innerHTML="<p style=\"color:red;\">Provide a valid name.<p>";
				document.getElementById("fname").value="";
				document.getElementById("lname").value="";
				k++;
			}			
			if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {        
				document.getElementById("eErr").innerHTML="<p style=\"color:red;\">Please enter a valid email address.</p>";
				document.getElementById("email").value="";
				k++;	
				}
			if(p.length<8)
			{
				document.getElementById("pErr").innerHTML="<p style=\"color:red;\">Password must be at least 8 character in length.<p>";
				document.getElementById("password").value="";
				document.getElementById("cpassword").value="";
				k++;
			}
			else if(p.length>=8 && p!=cp){
				document.getElementById("pErr").innerHTML="<p style=\"color:red;\">Does not match Confirm Password.<p>";				
				document.getElementById("password").value="";
				document.getElementById("cpassword").value="";
				k++;
			}
			if(k!=0)
				return;
			}			
			createAcc();
		}

		//The function is called when the "Create Account" button is pressed
		function createAcc(){
			var obj=document.getElementById("fname").name+"="+document.getElementById("fname").value+"&"+document.getElementById("lname").name+"="+document.getElementById("lname").value+"&"+document.getElementById("email").name+"="+document.getElementById("email").value+"&"+document.getElementById("password").name+"="+document.getElementById("password").value;

			var xhttp=new XMLHttpRequest();
			xhttp.onreadystatechange=function(){
				var result=this.responseText;
				if(this.readyState==4 && this.status==200){					
					if(result==1){
						document.write("<h1>Account creation successful.<h1><br><a href='index.html'>Login<a>");}
					else if (result==0){
						alert("An account with that email already exists.");
						document.getElementById("email").value="";
						}
					else{
						alert(result);
					}
					}
				};
			xhttp.open("POST","PHP/Register.php","true");
			xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			
			xhttp.send(obj);
		}