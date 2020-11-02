function validateForm() {
var x = document.forms["myForm"]["pnumber"].value;
var y = document.forms["myForm"]["email"].value; 

 var regx =/^[[9][8]]\d{8}$/;
 if(regx.test(x))
 {
 alert("please enter valid number")
 return false;
 }
}
