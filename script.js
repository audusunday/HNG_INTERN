
function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toLocaleString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'UTC' });
    const utcDay = now.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'UTC' });

    document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime;
    document.querySelector('[data-testid="currentDay"]').textContent = utcDay;
}

updateTimeAndDay();

setInterval(updateTimeAndDay, 1000);



