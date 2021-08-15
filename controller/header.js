import { getData } from "../service/service.js";

let loginSideMenu = document.getElementById("mySidebar");

const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", loginPage);


const closeButton = document.getElementById("closeButton");
closeButton.addEventListener("click", closeNav);

const registerButton = document.getElementById("registerButton");
registerButton.addEventListener("click", openRegister);

const form = document.forms[0];
form.addEventListener("submit", event => handleSubmit(event));

const userName = document.getElementById("userName");
userName.addEventListener("keyup", validate);

const password = document.getElementById("password");
password.addEventListener("keyup", validate);

function loginPage(e) {
    e.stopPropagation()
    loginSideMenu.classList.add('log-menu');
}

function openRegister() {
    window.open('registerPage.html');
}

async function handleSubmit(event) {
    event.preventDefault()
    let user = await getData();
    const password = form.password.value;
    const emailVal = form.username.value;
    user.map((userData) => {
        if (userData.email === emailVal && userData.password == password) {
            alert("Logged in as customer")
        } else {
            alert('either email or password is incorrect')
        }
    })
}

function validate() {
    const form = document.getElementById("userLoginForm");
    const button = document.getElementById('userLoginBtn');
    const password = form.password.value;
    const emailVal = form.username.value;
    if (!validatePassword(password) || !validateEmail(emailVal)) {
        button.setAttribute('disabled', 'disabled');
    } else {
        button.removeAttribute('disabled');
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    const re = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,14}$/g;
    return re.test(password);
}

function closeNav() {
    loginSideMenu.classList.remove('log-menu');
}