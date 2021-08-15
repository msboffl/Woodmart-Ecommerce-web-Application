  let users={
      name: "",
      password: "",
      email: ""
    }
let users_list=[];

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', myFunctionForSticky);
    var navbar = document.getElementById("myHeader");
    var sticky = navbar.offsetTop;  
    function myFunctionForSticky() {

      if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        navbar.classList.add("make-background-black");
      } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("make-background-black");
      }
    }
    function myFunctionForResponsive() {
      navbar.classList.toggle('responsive');
    }
  })

  const registrationSubmit = document.getElementById("registrationSubmit");
  console.log("Registration: " + registrationSubmit);
  registrationSubmit.addEventListener("click", event => validateRegister(event));


  function validateRegister(event){
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("registerEmail").value;
    const pass=document.getElementById("registerPass").value;
    var len=name.length;
    if(len==0){
    document.getElementById("nameError").innerHTML="<font style=color:red>Invalid Name.</font>";
    return;
    }
    else{
    document.getElementById("nameError").innerHTML="";
    if (typeof(Storage) !== "undefined") {

      users.name=name;
    } else {
     console.log("Sorry, your browser does not support Web Storage...");
    }
    }
    if(!validatePassword(pass)){
    document.getElementById("passError").innerHTML="<font style=color:red>Invalid Password.</font>";
    return;
    }
    else{
      document.getElementById("passError").innerHTML="";
      if (typeof(Storage) !== "undefined") {
        users.password=pass;
      } else {
       console.log("Sorry, your browser does not support Web Storage...");
      }
      }
    if(!validateEmail(email)){
    document.getElementById("mailError").innerHTML="<font style=color:red>Please enter a valid Email.</font>";
    return;
  }
  else{
    document.getElementById("mailError").innerHTML="";
    if (typeof(Storage) !== "undefined") {
      users.email=email;
      users_list.push({...users});
      count++;
      window.localStorage.setItem('users_list', JSON.stringify(users_list));
    } else {
     console.log("Sorry, your browser does not support Web Storage...");
    }
    }
  }


function validateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.match(mailformat))
return true;
else
return false;
}

function validatePassword(password) {
    const re = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,14}$/g;
    return re.test(password);
}


