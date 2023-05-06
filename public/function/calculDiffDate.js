export function calculDiffDate(dateUser) {
    const today = new Date();
    const diff = new Date(today.getTime() - dateUser.getTime());
    const yearDiff = diff.getUTCFullYear() - 1970;
    const monthDiff = diff.getUTCMonth();
    const dayDiff = diff.getUTCDate() - 1;
    return { dayDiff, monthDiff, yearDiff };
}
