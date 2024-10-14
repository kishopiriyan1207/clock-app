function updateClock() {
    const now = new Date();    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();    // Calculate the degree for each hand
    const secondDegrees = ((seconds / 60) * 360) + 90;
    const minuteDegrees = ((minutes / 60) * 360) + (seconds / 60) * 6 + 90;
    const hourDegrees = ((hours % 12) / 12 * 360) + (minutes / 60) * 30 + 90;    // Rotate the hands accordingly
    document.getElementById('second').style.transform = `rotate(${secondDegrees}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteDegrees}deg)`;
    document.getElementById('hour').style.transform = `rotate(${hourDegrees}deg)`;    // Update digital clock
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const digitalHours = hours % 12 || 12;
    const digitalTime = `${String(digitalHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;
    document.getElementById('digitalClock').textContent = digitalTime;
}// Call updateClock every second
setInterval(updateClock, 1000);updateClock(); // Initial call