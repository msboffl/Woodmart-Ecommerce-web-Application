const hamburgerSign = document.getElementById("hamburgerSign");
hamburgerSign.addEventListener("click", openNav);

let mobLoginSideMenu = document.getElementById("mobileSidebar");

const mobileLoginPage = document.getElementById("mobileLoginPage");
mobileLoginPage.addEventListener("click", loginPage);

function openNav() {
    mobLoginSideMenu.classList.add('mob-log-menu');

}

function loginPage() {
    let loginSideMenu = document.getElementById("mySidebar");
    loginSideMenu.classList.add('log-menu');
    mobLoginSideMenu.classList.remove('mob-log-menu');
}