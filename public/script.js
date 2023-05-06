import { isError } from "./function/isError.js";
import { calculDiffDate } from "./function/calculDiffDate.js";
const btn = document.querySelector("#btn");
btn.addEventListener("click", (event) => {
    event.preventDefault();
    const day = parseInt(document.querySelector("#day").value);
    const month = parseInt(document.querySelector("#month").value);
    const year = parseInt(document.querySelector("#year").value);
    if (!isError(day, month, year)) {
        const dateUser = new Date(`${year}-${month}-${day}`);
        const { dayDiff, monthDiff, yearDiff } = calculDiffDate(dateUser);
        const dayResult = document.querySelector(".dayResult");
        const monthResult = document.querySelector(".monthResult");
        const yearResult = document.querySelector(".yearResult");
        dayResult.innerHTML = dayDiff.toString();
        monthResult.innerHTML = monthDiff.toString();
        yearResult.innerHTML = yearDiff.toString();
    }
});
