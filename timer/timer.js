let countdown = 5; // Timer duration in seconds
const timerElement = document.getElementById('timer');
const button = document.getElementById('returnButton');

// Start the timer
const startTimer = () => {
    const interval = setInterval(() => {
        if (countdown <= 0) {
            clearInterval(interval);
            timerElement.style.display = 'none'; // Hide the timer
            button.style.display = 'block'; // Show the button
            // Optionally redirect automatically instead of showing a button:
            // window.location.href = "https://nyu.qualtrics.com/jfe/form/YOUR_SURVEY_ID?next=segment2";
        } else {
            timerElement.textContent = countdown; // Update the timer
            countdown--;
        }
    }, 1000);
};

// Redirect the user back to the survey
//change the part after /form/  to  survey ID, follwed by    ?next=segment2
button.addEventListener('click', () => {
    window.location.href = "https://nyu.qualtrics.com/jfe/form/SV_aVqd6yJgvdQUHWu?next=segment2";
});

// Start the timer on page load
window.onload = startTimer;
