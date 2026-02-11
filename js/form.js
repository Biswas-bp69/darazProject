// for register
document.getElementById("myForm").addEventListener("submit", function(e){
    e.preventDefault();
    let names = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("c-password").value;

    if (names == "" || email == ""|| password == "" || confirmPassword == "") {
        alert("You Cant Empty Field");
    }else if(password !== confirmPassword){
        alert("password is not same");
    }else{
        alert("register successfull");
        window.location.href="index.html";
    }
})

// for login
document.getElementById("loginPage").addEventListener("submit",function(e){
    e.preventDefault();

    let names = document.getElementById("login-name").value;
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    if(names == "" && email ==""){
        alert("Fill user name or Email.");
    }else if(password==""){
        alert("Enter Correct Password")
    }else{
        alert("Login Successfully")
        window.location.href="index.html";
    }
})



document.querySelectorAll('a.nav-link').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });