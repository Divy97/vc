let form = document.getElementById("lobby__form");

let displayName = sessionStorage.getItem("display_name");
if (displayName) {
  form.name.value = displayName;
}

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   sessionStorage.setItem("display_name", e.target.name.value);
// });
