import { isError } from "./function/isError.js";
import { calculDiffDate } from "./function/calculDiffDate.js";

const btn = document.querySelector("#btn") as HTMLButtonElement;

btn.addEventListener("click", (event: Event) => {
	event.preventDefault();

	const day: number = parseInt((document.querySelector("#day") as HTMLInputElement).value);
	const month: number = parseInt((document.querySelector("#month") as HTMLInputElement).value);
	const year: number = parseInt((document.querySelector("#year") as HTMLInputElement).value);
	const today = new Date();

	if (!isError(day, month, year, today)) {
		const dateUser = new Date(`${year}-${month}-${day}`);
		const { dayDiff, monthDiff, yearDiff } = calculDiffDate(dateUser, today);
		const dayResult = document.querySelector(".dayResult") as HTMLSpanElement;
		const monthResult = document.querySelector(".monthResult") as HTMLSpanElement;
		const yearResult = document.querySelector(".yearResult") as HTMLSpanElement;
		dayResult.innerHTML = dayDiff.toString();
		monthResult.innerHTML = monthDiff.toString();
		yearResult.innerHTML = yearDiff.toString();
	}
});
