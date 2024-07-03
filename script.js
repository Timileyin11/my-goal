// Update current time in UTC
function updateCurrentTime() {
    const currentTimeElement = document.getElementById('currentTime');
    const currentDate = new Date();
    const options = { timeZone: 'UTC', hour12: false };
    const currentTimeUTC = currentDate.toLocaleTimeString('en-US', options);
    currentTimeElement.textContent = currentTimeUTC;
}

// Update current day of the week
function updateCurrentDay() {
    const currentDayElement = document.getElementById('currentDay');
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    currentDayElement.textContent = currentDay;
}

// Function calls
updateCurrentTime();
updateCurrentDay();
