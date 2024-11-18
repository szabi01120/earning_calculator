export function calculateEarnings(hourlyWage) {
    const workStart = new Date();
    workStart.setHours(8, 30, 0, 0);

    const workEnd = new Date();
    workEnd.setHours(17, 0, 0, 0);

    const lunchStart = new Date();
    lunchStart.setHours(13, 30, 0, 0);

    const lunchEnd = new Date();
    lunchEnd.setHours(14, 0, 0, 0);

    let now = new Date();

    if (now < workStart) return 0;
    if (now > workEnd) now = workEnd;

    const totalWorkSeconds = (workEnd - workStart - (lunchEnd - lunchStart)) / 1000;

    let elapsedSeconds = (now - workStart) / 1000;

    if (now > lunchStart && now < lunchEnd) {
        elapsedSeconds -= (now - lunchStart) / 1000;
    } else if (now > lunchEnd) {
        elapsedSeconds -= (lunchEnd - lunchStart) / 1000;
    }

    const dailyEarnings = hourlyWage * 8;

    const soFarEarned = ( dailyEarnings / totalWorkSeconds ) * elapsedSeconds;

    return soFarEarned;
}