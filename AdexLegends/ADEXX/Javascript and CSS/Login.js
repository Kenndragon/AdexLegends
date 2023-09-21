function minimumLength(name, minlength){
  var mnlen = minlength;
   
  if(name.value.length<mnlen){
    alert("Password should be at least " +mnlen+ " characters long");
    return false;
  }
}  

function maximumLength(name, maxlength){
  var mxlen = maxlength;
   
  if(name.value.length>mxlen){
    alert("Username can't be more than " +mxlen+ " characters long");
    return false;
  }
}  

function checkN(pass){
  for(let i=0; i<pass.length; i++){
    if(isNaN(pass[i])==false){
      return true;
    }
  }
  return false;
}

function validateForm(){
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      errorname.innerHTML = "Username must be filled out";
      return false;
    }
    else{
      errorname.innerHTML = "";
    }
    if(x.length > 18){
      errorname.innerHTML = "Username can't be more than 18 characters long";
      return false;
    }
    else{
      errorname.innerHTML = "";
    }

    let y = document.forms["myForm"]["ffull"].value;
    if (y == "") {
      errorfull.innerHTML = "Fullname must be filled out";
      return false;
    }
    else{
      errorfull.innerHTML = "";
    }

    let z = document.forms["myForm"]["femail"].value;
    if (z == "") {
      erroremail.innerHTML = "Email must be filled out";
      return false;
    }
    else{
      erroremail.innerHTML = "";
    }

    if(!z.endsWith("@gmail.com") && !z.endsWith("@yahoo.com")){
      erroremail.innerHTML = "Email must end with '@gmail.com' or '@yahoo.com'";
      return false;
    }
    else{
      erroremail.innerHTML = "";
    }

    let w = document.forms["myForm"]["fpass"].value;
    if (w == ""){
      errorpass.innerHTML = "Password must be filled out";
      return false;
    }
    else{
      errorpass.innerHTML = "";
    }

    if(w.length < 7){
      errorpass.innerHTML = "Password should be at least 7 characters long";
      return false;
    }
    else{
      errorpass.innerHTML = "";
    }

    if(!checkN(w)){
      errorpass.innerHTML = "Password must at least contain one number";
      return false;
    }
    else{
      errorpass.innerHTML = "";
    }

    let t = document.forms["myForm"]["faddr"].value;
    if (t == ""){
      erroraddr.innerHTML = "Address must be filled out";
      return false;
    }
  }

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }