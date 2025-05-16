  document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío normal del formulario

    const email = "renzo_bisso@outlook.com";
    const subject = encodeURIComponent(document.getElementById('subject').value);
    const body = encodeURIComponent(document.getElementById('body').value);

    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink; 
    this.reset();
  });