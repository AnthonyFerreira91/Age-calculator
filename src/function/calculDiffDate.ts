export function calculDiffDate(dateUser: Date, today: Date) {
	const diff = new Date(today.getTime() - dateUser.getTime());

	const yearDiff = diff.getUTCFullYear() - 1970;
	const monthDiff = diff.getUTCMonth();
	const dayDiff = diff.getUTCDate() - 1;

	return { dayDiff, monthDiff, yearDiff };
}
