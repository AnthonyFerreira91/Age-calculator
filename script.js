var btn = document.querySelector("#btn");
btn.addEventListener("click", function (event) {
    event.preventDefault();
    var day = document.querySelector("#day");
    var month = document.querySelector("#month");
    var year = document.querySelector("#year");
    var dateToday = Date.now();
    // Vérifier les inputs (Gérer les erreurs)
    // Convertir les inputs en secondes
    // Soustraire la date user de la date du jour
    // Mettre en nombre de jour/mois/année la différence
});
