const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form).entries());

  // Mesaj göndərildiyini bildirin
  alert("Mesajınız göndərildi!");

  // Formu təmizlə
  form.reset();

  // Optional: mailto fallback
  /*
  const subject = encodeURIComponent('Kontakt formu: ' + data.name);
  const body = encodeURIComponent('Email: ' + data.email + '\n\n' + data.message);
  window.location.href = `mailto:resul913@example.com?subject=${subject}&body=${body}`;
  */
});
