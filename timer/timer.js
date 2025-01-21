document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.getElementById('timer-display');
    const startButton = document.getElementById('start-timer');
    let timerDuration = 30; // Timer duration in seconds
    let timerInterval;

    startButton.addEventListener('click', () => {
        if (timerInterval) clearInterval(timerInterval); // Clear any existing timer
        startButton.disabled = true; // Disable the button while the timer runs
        timerDuration = 30; // Reset the timer duration

        timerInterval = setInterval(() => {
            if (timerDuration <= 0) {
                clearInterval(timerInterval); // Stop the timer
                timerDisplay.textContent = "Time's up!";
                startButton.disabled = false; // Re-enable the button
            } else {
                timerDisplay.textContent = `${timerDuration} seconds remaining`;
                timerDuration--;
            }
        }, 1000);
    });
});
