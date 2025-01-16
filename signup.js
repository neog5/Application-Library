import { signUp } from "./userAuth";

const signUpBtn = document.querySelector("#signup-btn");

signUpBtn.addEventListener("click", () => {
  let email = document.getElementsByName("email")[0].values;
  let password = document.getElementsByName("password")[0].values;
  let confirmPass = document.getElementsByName("confirm-pass")[0].values;

  if (!checkPasswords) {
    document.getElementById("pass-match-warn").classList.add(".active");
    return;
  }

  signUp(email, password);
  return;
});

const checkPasswords = function (password, confirmPass) {
  return password === confirmPass;
};
