const details={
	email:'anujvdev2020@gmail.com',
	pwd:"anujv@1998"
}
const nd={}

btn.onclick=()=>{
	let option=btn.innerHTML;
	if(option==="Sign Up"){




		nd.details=email.value;
		nd.pwd= pwd.value;
		nd.ph=phn.value;
		alert("Details Saved")
	}

	else{
		if(email.value===details.email && pwd.value===details.pwd){
	alert("Welcome")
	}
	else{
	alert("Wrong Credientials")
	}

	}


	


}




signup.onclick=()=>{
	h1.innerHTML="Sign Up To Continue";
	let phone=document.createElement("input");
	phone.placeholder="Enter Phone Number";
	phone.id="phn"
	document.getElementById('new').appendChild(phone); 

btn.innerHTML="Sign Up"




}



