const btn = document.querySelector("#btn") as HTMLButtonElement;

btn.addEventListener("click", (event: Event) => {
	event.preventDefault();

	const day = document.querySelector("#day") as HTMLInputElement;
	const month = document.querySelector("#month") as HTMLInputElement;
	const year = document.querySelector("#year") as HTMLInputElement;

	const dateToday = Date.now();

	// Vérifier les inputs (Gérer les erreurs)
	// Convertir les inputs en secondes
	// Soustraire la date user de la date du jour
	// Mettre en nombre de jour/mois/année la différence
});
