
        function displayUTCTime() {
            const timeElement = document.getElementById('utc-time');
            const now = new Date();
            timeElement.textContent = now.toUTCString();
        }

        
        displayUTCTime();
   