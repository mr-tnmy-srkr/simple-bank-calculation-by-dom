document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  if (email === "mybank@bank.com" && password === "secret") {
    window.location.href = "bank.html";
  } else if (email === "mybank@bank.com" && password !== "secret") {
    alert("You have entered wrong password!!😒");
  } else if (email !== "mybank@bank.com" && password === "secret") {
    alert("You have entered wrong email id!!😒");
  } else if (email !== "mybank@bank.com" && password !== "secret") {
    alert("You have entered wrong Email id & Password!! Please try again");
  }
});
