const loginBtn = document.getElementById("logBtn");
loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let inputEmail = document.getElementById("input1").value;
  let inputPassword = document.getElementById("input2").value;

  const email = "test@gmail.com";
  const password = "123456789";
  if (inputEmail === email && inputPassword === password) {
    window.location.href = "index.html";
  } else {
    alert("Invalid email & password");
  }
});
