const passwordInput = document.querySelector("#password");
const eye = document.querySelector("#eye");

eye.addEventListener("click", function () {
    const icon = this.getAttribute("name") === "eye-outline" ? "eye-off-outline" : "eye-outline";
    this.setAttribute("name", icon)
    const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
});
