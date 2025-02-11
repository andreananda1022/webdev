const PHONE_NUMBER = "+6281228180764";

function sendMessage(event) {
  event.preventDefault();
  const fields = {
    firstName: document.getElementById("firstName").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    email: document.getElementById("email").value.trim(),
    message: document.getElementById("message").value.trim()
  };

  let hasErrors = false;

  clearErrorMessages();

  if (fields.firstName === "") {
    showErrorMessage("errorFirstName", "First name is required.");
    hasErrors = true;
  }
  if (fields.phone === "") {
    showErrorMessage("errorPhone", "Phone number is required.");
    hasErrors = true;
  }
  if (fields.email === "") {
    showErrorMessage("errorEmail", "Email is required.");
    hasErrors = true;
  }
  if (fields.message === "") {
    showErrorMessage("errorMessage", "Message is required.");
    hasErrors = true;
  }

  if (hasErrors) {
    return;
  }

  const text = `Hallo, I am ${fields.firstName}. %0A${fields.message}`;
  const encodedText = encodeURIComponent(text);
  const url = `https://wa.me/${PHONE_NUMBER}?text=${encodedText}`;

  window.open(url, "_blank");
}

function showErrorMessage(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
}

function clearErrorMessages() {
  document.getElementById("errorFirstName").textContent = "";
  document.getElementById("errorPhone").textContent = "";
  document.getElementById("errorEmail").textContent = "";
  document.getElementById("errorMessage").textContent = "";
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("sm:hidden");
}
