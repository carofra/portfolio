// Funzione per gestire la visibilità delle sezioni e la classe 'active' sui link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    // Rimuovere la classe 'active' da tutti i link
    document.querySelectorAll(".nav-link").forEach((el) => {
      el.classList.remove("active");
    });

    // Aggiungere la classe 'active' al link cliccato
    this.classList.add("active");
  });
});

function sendMail(event) {
  // Previeni il comportamento predefinito del form
  event.preventDefault();
  // Ottieni i valori dei campi
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Funzione di validazione email
  function isValidEmail(email) {
    // Utilizzo di una semplice regex per verificare la validità dell'email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // Controlla se i campi sono vuoti o l'email non è valida
  if (!name || !email || !message) {
    alert("All fields are required");
    return; // Interrompe la funzione se uno dei campi è vuoto
  } else if (!isValidEmail(email)) {
    alert("Enter a valid email");
    return; // Interrompe la funzione se l'email non è valida
  }

  // Parametri per inviare l'email
  var params = {
    name: name,
    email: email,
    message: message,
  };

  const serviceID = "service_hbljbpj";
  const templateID = "template_u8vg9vf";

  // Invia l'email se le validazioni sono superate
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      // Pulisci i campi dopo l'invio
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message has been sent successfully!");
    })
    .catch((err) => console.log(err));
}
