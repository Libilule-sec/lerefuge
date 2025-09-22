// Sélection des éléments
const bouton = document.getElementById("btn-lavage-repassage");
const select = document.getElementById("vetement");

// Ton numéro WhatsApp en format international sans "+"
const numero = "22893781231";

bouton.addEventListener("click", function (e) {
  e.preventDefault();
  let choix = select.options[select.selectedIndex].text;
  let message = "Bonjour, je veux commander un Lavage + Repassage (" + choix + ")";
  let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
});

// Date limite de l'offre (AAAA, MM - 1, JJ, HH, mm, ss)
const deadline = new Date("2025-09-30T23:59:59").getTime();

const countdownEl = document.getElementById("countdown");

let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = deadline - now;

  if (distance < 0) {
    clearInterval(x);
    countdownEl.innerHTML = "❌ Offre expirée";
    return;
  }

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML = days + "j " + hours + "h "
                        + minutes + "m " + seconds + "s ";
}, 1000);
