import { isError } from "./function/isError.js";
import { calculDiffDate } from "./function/calculDiffDate.js";

const btn = document.querySelector("#btn") as HTMLButtonElement;

btn.addEventListener("click", (event: Event) => {
	event.preventDefault();

	const day = parseInt((document.querySelector("#day") as HTMLInputElement).value);
	const month = parseInt((document.querySelector("#month") as HTMLInputElement).value);
	const year = parseInt((document.querySelector("#year") as HTMLInputElement).value);
	const dayResult = document.querySelector(".dayResult") as HTMLSpanElement;
	const monthResult = document.querySelector(".monthResult") as HTMLSpanElement;
	const yearResult = document.querySelector(".yearResult") as HTMLSpanElement;
	const today = new Date();

	if (!isError(day, month, year, today)) {
		const dateUser = new Date(`${year}-${month}-${day}`);
		const { dayDiff, monthDiff, yearDiff } = calculDiffDate(dateUser, today);
		dayResult.innerHTML = dayDiff.toString();
		monthResult.innerHTML = monthDiff.toString();
		yearResult.innerHTML = yearDiff.toString();
	}
});
