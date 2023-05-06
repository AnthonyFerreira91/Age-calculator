export function isError(day: number, month: number, year: number, today: Date): boolean {
	let error = false;
	const errorDay = document.querySelector(".errorDay") as HTMLParagraphElement;
	const errorMonth = document.querySelector(".errorMonth") as HTMLParagraphElement;
	const errorYear = document.querySelector(".errorYear") as HTMLParagraphElement;
	const maxDays = new Date(year, month, 0).getDate();
	errorDay.style.display = "none";
	errorMonth.style.display = "none";
	errorYear.style.display = "none";

	if (isNaN(day)) {
		errorDay.innerHTML = "This field is required";
		errorDay.style.display = "block";
		error = true;
	} else if (day < 1 || day > maxDays) {
		errorDay.innerHTML = "Must be a valid day";
		errorDay.style.display = "block";
		error = true;
	}

	if (isNaN(month)) {
		errorMonth.innerHTML = "This field is required";
		errorMonth.style.display = "block";
		error = true;
	} else if (month < 1 || month > 12) {
		errorMonth.innerHTML = "Must be a valid month";
		errorMonth.style.display = "block";
		error = true;
	}

	if (isNaN(year)) {
		errorYear.innerHTML = "This field is required";
		errorYear.style.display = "block";
		error = true;
	} else if (year < 1970 || year > today.getFullYear()) {
		errorYear.innerHTML = "Must be a valid year";
		errorYear.style.display = "block";
		error = true;
	}

	return error;
}
