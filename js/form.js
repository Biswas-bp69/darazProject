// REGISTER
document.getElementById("myForm").addEventListener("submit", function(e){
    e.preventDefault();

    let names = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("c-password").value;

    if (!names || !email || !password || !confirmPassword) {
        alert("You can't leave fields empty");
        return;
    }

    if (password !== confirmPassword) {
        alert("Password not same");
        return;
    }

    alert("Register successful");
    window.location.href = "index.html";
});


// LOGIN
document.getElementById("loginPage").addEventListener("submit", function(e){
    e.preventDefault();

    let names = document.getElementById("login-name").value.trim();
    let email = document.getElementById("login-email").value.trim();
    let password = document.getElementById("login-password").value;

    if (!names && !email) {
        alert("Fill username or email");
        return;
    }

    if (!password) {
        alert("Enter password");
        return;
    }

    alert("Login successful");
    window.location.href = "index.html";
});



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