import { signUp } from "./userAuth";

const signUpBtn = document.querySelector("#signup-btn");

signUpBtn.addEventListener("click", () => {
  let email = document.getElementsByName("email")[0].value;
  let password = document.getElementsByName("password")[0].value;
  let confirmPass = document.getElementsByName("confirm-pass")[0].value;
  if (!checkPasswords(password, confirmPass)) {
    document.querySelector(".pass-match-warn").classList.add("active");
    return;
  }

  signUp(email, password);
  return;
});

const checkPasswords = function (password, confirmPass) {
  if (!password) return false;
  return password === confirmPass;
};
