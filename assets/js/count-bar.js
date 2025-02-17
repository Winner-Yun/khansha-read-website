    // Function to animate the progress bar percentage count
    function animateProgress(id, percentId, targetPercent, duration) {
        let element = document.getElementById(id);
        let percentElement = document.getElementById(percentId);
        let start = 0;
        let increment = targetPercent / (duration / 10);

        let interval = setInterval(function() {
            start += increment;
            percentElement.innerText = Math.min(Math.floor(start), targetPercent) + '%';
            if (start >= targetPercent) {
                clearInterval(interval);
            }
        }, 10);
    }

    // Trigger the progress animations on window load
    window.onload = function() {
        animateProgress('progressBar1', 'progressPercent1', 75, 3000);
        animateProgress('progressBar2', 'progressPercent2', 50, 3000);
        animateProgress('progressBar3', 'progressPercent3', 30, 3000);
    };

    