// const axios = require("axios");
const userInfo = localStorage.getItem("userInfo");

if (userInfo) {
  location.href = "http://localhost:8000/room";
} else {
  let loginForm = document.getElementById("loginForm");
  const loader = document.getElementById("loading");
  loader.classList.add("loading-hidden");
  let error = "";
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const handleSubmit = async (e) => {
    e.preventDefault();

    loader.classList.remove("loading-hidden");

    let login_userEmail = document.getElementById("email").value;
    let login_userPassword = document.getElementById("password").value;
    console.log(login_userEmail, login_userPassword);
    try {
      let raw = JSON.stringify({
        email: login_userEmail,
        password: login_userPassword,
      });
      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      let data = await fetch("http://localhost:8000/room/login", requestOptions)
        .then((response) => response.text())
        .then((result) => result)
        .catch((error) => console.log("error", error));

      console.log("data" + data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      loader.classList.add("loading-hidden");
      location.href = "http://localhost:8000/room";
      login_userEmail = document.getElementById("email").value = "";
      login_userEmail = document.getElementById("password").value = "";
    } catch (error) {
      error = error.response.data.message;
    }
  };

  loginForm.addEventListener("submit", handleSubmit);
}
