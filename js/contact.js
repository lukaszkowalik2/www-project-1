function handleSubmit(event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    topic: document.getElementById("topic").value,
    message: document.getElementById("message").value,
  };

  const submitBtn = document.getElementById("submitBtn");
  const submitStatus = document.getElementById("submitStatus");
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Wysyłanie...';

  setTimeout(() => {
    const isSuccess = Math.random() > 0.1;

    if (isSuccess) {
      submitStatus.innerHTML = '<div class="alert alert-success">Wiadomość została wysłana! Odpowiemy najszybciej jak to możliwe.</div>';
      document.getElementById("contactForm").reset();
    } else {
      submitStatus.innerHTML = '<div class="alert alert-danger">Wystąpił błąd podczas wysyłania. Prosimy spróbować później.</div>';
    }

    submitBtn.disabled = false;
    submitBtn.innerHTML = "Wyślij wiadomość";

    setTimeout(() => {
      submitStatus.innerHTML = "";
    }, 5000);
  }, 2000);

  console.log("Wysłano dane:", formData);
}

document.getElementById("email").addEventListener("input", function (e) {
  const email = e.target.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email)) {
    e.target.classList.add("is-invalid");
  } else {
    e.target.classList.remove("is-invalid");
  }
});
