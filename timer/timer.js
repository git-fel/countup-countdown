let countdown = 30; // Timer duration in seconds
const timerElement = document.getElementById('timer');
const button = document.getElementById('returnButton');

// Start the timer
const startTimer = () => {
    timerElement.textContent = countdown; // Initialize timer display
    const interval = setInterval(() => {
        if (countdown <= 0) {
            clearInterval(interval);
            timerElement.style.display = 'none'; // Hide the timer
            button.style.display = 'block'; // Show the button
            // Optionally redirect automatically instead of showing a button:
            // window.location.href = "https://nyu.qualtrics.com/jfe/form/SV_aVqd6yJgvdQUHWu?next=BL_bC8RlbW8DO3GiV0";
        } else {
            countdown--; // Decrement countdown
            timerElement.textContent = countdown; // Update the timer
        }
    }, 1000);
};

// Redirect the user back to the survey
// Make sure the part after `/form/` matches your Qualtrics survey ID
button.addEventListener('click', () => {
    window.location.href = "https://nyu.qualtrics.com/jfe/form/SV_aVqd6yJgvdQUHWu?redirected=1&next=BL_bC8RlbW8DO3GiV0";
});


// Start the timer on page load
window.onload = startTimer;
