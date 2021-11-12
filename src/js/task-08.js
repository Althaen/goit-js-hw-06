const loginForm = document.querySelector("form.login-form");
// console.log(loginForm);
const emailInput = loginForm.elements.email;
// console.log(emailInput);
const passwordInput = loginForm.elements.password;
// console.log(passwordInput);

const output = {
  email: "email",
  password: "password",
};
// console.log(output);

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Все поля должны быть заполнены");
    return;
  } else {
    output.email = emailInput.value;
    output.password = passwordInput.value;
  }
  console.log(output);
  loginForm.reset();
});
