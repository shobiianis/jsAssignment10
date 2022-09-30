function check(input){

if(input.value==""){
    alert("Please Input The value")
}

}

function validate(contactinput){
   
var number=contactinput.value.length;
if (number!=11) {
    alert(" Please input correct Number")
}

}

function validate2(contactinput){
   
    var number=contactinput.value.length;
    if (number!=5) {
        alert(" Please input correct Zipcode")
    }
    
    }


function validateEmail(inputEmail){
var value=false
var email=inputEmail.value;
for(var i=0;i<email.length;i++){
if(email[i]=="@"){
    value=true;
}

}

if(value==false){
    alert("Please Input Correct Email")
}
    }


function show(){
    var uName,fName,lName,no,zCode,email;
uName=document.getElementById("username").value;
fName=document.getElementById("firstname").value;
lName=document.getElementById("lastname").value;
no=document.getElementById("number").value;
zCode=document.getElementById("zipCode").value;
email=document.getElementById("email").value;


document.write(uName+"<br>"+fName+"<br>"+lName+"<br>"+no+"<br>"+zCode+"<br>"+email+"<br>")

    }