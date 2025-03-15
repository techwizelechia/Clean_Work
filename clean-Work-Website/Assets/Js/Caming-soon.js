
        function startCountdown(targetDate) {
            function updateTimer() {
                const now = new Date().getTime();
                const difference = targetDate - now;

                if (difference <= 0) {
                    document.getElementById("countdown").innerHTML = "Time's up!";
                    clearInterval(interval);
                    return;
                }

                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                document.getElementById("countdown").innerHTML =
                    `${days}d ${hours}h ${minutes}m ${seconds}s`;
            }

            updateTimer(); // Run immediately
            const interval = setInterval(updateTimer, 1000); // Update every second
        }

        // Set the countdown target (YYYY, MM (0-based), DD, HH, MM, SS)
        const targetDate = new Date("2025-12-31T23:59:59").getTime();
        startCountdown(targetDate);
