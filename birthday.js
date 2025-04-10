
        function createConfetti() {
            for (let i = 0; i < 100; i++) {
                let confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
                document.body.appendChild(confetti);
            }
        }
        
        document.getElementById("showCake").addEventListener("click", function() {
            document.getElementById("cake").classList.remove("hidden");
            document.getElementById("song").play();
            createConfetti();
            this.classList.add("hidden");
        });
