function checkName(nameNode){
  var name = nameNode.value;
  if (name==null || name=="") {
     document.getElementById("name-error").innerHTML="Name not allow blank!";
     return false;
  }
  else{
    return true;
  }
}
function checkEmail(emailNode){
  var name = emailNode.value;
  if (name==null || name=="") {
     document.getElementById("email-error").innerHTML="Email not allow blank!";
     return false;
  }
  else{
    return true;
  }
}
function checkMessage(messageNode){
  var name = messageNode.value;
  if (name==null || name=="") {
     document.getElementById("message-error").innerHTML="Message not allow blank!";
     return false;
  }
  else{
    return true;
  }
}
function validates(){
  var form = document.forms[0];
  if(checkName(form.name) && checkPassword(form.email) && checkPwd_confirm(form.message)){
    return true;
  }
  else{
    alert("There are some errors,failed to commit!");
    return false;
  }
}

