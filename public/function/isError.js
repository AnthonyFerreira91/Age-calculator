import { drawRedError } from "./drawRedError.js";
export function isError(day, month, year, today) {
    let error = false;
    drawRedError("clean");
    const maxDays = new Date(year, month, 0).getDate();
    if (isNaN(day)) {
        drawRedError("day", "This field is required");
        error = true;
    }
    else if (day < 1 || day > maxDays) {
        drawRedError("day", "Must be a valid day");
        error = true;
    }
    if (isNaN(month)) {
        drawRedError("month", "This field is required");
        error = true;
    }
    else if (month < 1 || month > 12) {
        drawRedError("month", "Must be a valid month");
        error = true;
    }
    if (isNaN(year)) {
        drawRedError("year", "This field is required");
        error = true;
    }
    else if (year < 1950 || year > today.getFullYear()) {
        drawRedError("year", "Must be a valid year");
        error = true;
    }
    return error;
}
