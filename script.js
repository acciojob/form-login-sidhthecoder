function getFormvalue() {
    //Write your code here
	let fname=document.getElementById("fname").value;
	let lname=document.getElementById("lname").value;
	alert(fname+" "+lname);
}

let submit=document.getElementById("submit").value;
submit.addEventListener('onclick',getFormvalue);