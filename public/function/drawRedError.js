export function drawRedError(time, error) {
    const dayLabel = document.querySelector("#dayLabel");
    const dayInput = document.querySelector("#day");
    const dayError = document.querySelector(".dayError");
    const monthLabel = document.querySelector("#monthLabel");
    const monthInput = document.querySelector("#month");
    const monthError = document.querySelector(".monthError");
    const yearLabel = document.querySelector("#yearLabel");
    const yearInput = document.querySelector("#year");
    const yearError = document.querySelector(".yearError");
    switch (time) {
        case "day":
            dayLabel.style.color = "var(--LightRed)";
            dayInput.style.border = "1px solid var(--LightRed)";
            dayError.style.display = "block";
            if (error)
                dayError.textContent = error;
            break;
        case "month":
            monthLabel.style.color = "var(--LightRed)";
            monthInput.style.border = "1px solid var(--LightRed)";
            monthError.style.display = "block";
            if (error)
                monthError.textContent = error;
            break;
        case "year":
            yearLabel.style.color = "var(--LightRed)";
            yearInput.style.border = "1px solid var(--LightRed)";
            yearError.style.display = "block";
            if (error)
                yearError.textContent = error;
            break;
        case "clean":
            dayLabel.style.color = "var(--SmokeyGrey)";
            dayInput.style.border = "none";
            dayError.style.display = "none";
            monthLabel.style.color = "var(--SmokeyGrey)";
            monthInput.style.border = "none";
            monthError.style.display = "none";
            yearLabel.style.color = "var(--SmokeyGrey)";
            yearInput.style.border = "none";
            yearError.style.display = "none";
            break;
    }
}
