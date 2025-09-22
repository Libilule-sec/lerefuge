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
