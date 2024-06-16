const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  if (!data.email || !data.password) {
    alert("Please fill in all fields");
    return;
  }

  console.log("Form data:", data);

  loginForm.reset();
});
