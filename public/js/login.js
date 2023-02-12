// const axios = require("axios");
let login_userEmail = document.getElementById("email").value;
let login_userPassword = document.getElementById("password").value;
let loading = false;
let error = "";

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(login_userEmail);
  // try {
  //   const config = {
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   };
  //   loading = true;
  //   const { data } = await axios.post(
  //     "/login",
  //     {
  //       login_userEmail,
  //       login_userPassword,
  //     },
  //     config
  //   );
  //   console.log(data);
  //   localStorage.setItem("user-info", JSON.stringify(data));
  //   loading = false;
  // } catch (error) {
  //   error = error.response.data.message;
  // }
};
