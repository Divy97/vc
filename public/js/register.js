// const axios = require("axios");

let registerForm = document.getElementById("registerForm");
const loader = document.getElementById("loading");
loader.classList.add("loading-hidden");
let error = "";
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const handleSubmitRegister = async (e) => {
  e.preventDefault();

  loader.classList.remove("loading-hidden");

  let register_userEmail = document.getElementById("register_email").value;
  let register_userPassword =
    document.getElementById("register_password").value;
  let register_confirmUserPassword = document.getElementById(
    "register_confirmPassword"
  ).value;
  let register_userName = document.getElementById("register_name").value;

  if (register_userPassword !== register_confirmUserPassword) {
    error = "Password and confirm password are not same!";
  } else {
    try {
      let raw = JSON.stringify({
        name: register_userName,
        email: register_userEmail,
        password: register_userPassword,
        confirmPassword: register_confirmUserPassword,
      });
      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      let data = await fetch(
        "http://localhost:8000/room/register",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => result)
        .catch((error) => console.log("error", error));

      console.log("data" + data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      loader.classList.add("loading-hidden");
      location.href = "http://localhost:8000/lobby";
      login_userEmail = document.getElementById("email").value = "";
      login_userEmail = document.getElementById("password").value = "";
      login_userEmail = document.getElementById("password").value = "";
      login_userEmail = document.getElementById("password").value = "";
    } catch (error) {
      error = error.response.data.message;
    }
  }
};

registerForm.addEventListener("submit", handleSubmitRegister);
