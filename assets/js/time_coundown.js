function startCountdown(element) {
    const targetDate = new Date(element.getAttribute("data-target-date")).getTime();
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            element.innerHTML = "Time's up!";
            clearInterval(timerInterval);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        element.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    
    updateCountdown(); // Initial call
    const timerInterval = setInterval(updateCountdown, 1000);
}

document.querySelectorAll(".countdown").forEach(startCountdown);