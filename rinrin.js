// Floating hearts
        const heartsContainer = document.getElementById('hearts');
        function createHeart() {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = (Math.random() * 2 + 1) + 'em';
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            heart.textContent = '❤️';
            heartsContainer.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }
        setInterval(createHeart, 300);

        // No button teleport + clickable
        const noBtn = document.getElementById('noBtn');
        const popup = document.getElementById('popup');
        const noTexts = ["Try again 😜", "Not allowed 😏", "Haha nope!", "Catch me! 🏃‍♂️", "Nice try 😉"];
        const noMessages = ["Anung ayaw 😠", "Payag na kasiii 🙄", "Kala mo ahh 😋", "Bad muuu 😔"];

        noBtn.addEventListener('mouseenter', () => {
            const maxX = popup.clientWidth - noBtn.clientWidth;
            const maxY = popup.clientHeight - noBtn.clientHeight;
            const x = Math.random() * maxX;
            const y = Math.random() * maxY;
            noBtn.style.position = 'absolute';
            noBtn.style.left = x + 'px';
            noBtn.style.top = y + 'px';
            noBtn.textContent = noTexts[Math.floor(Math.random() * noTexts.length)];
        });

        noBtn.addEventListener('click', () => {
            const msg = document.createElement('div');
            msg.textContent = noMessages[Math.floor(Math.random() * noMessages.length)];
            msg.style.position = 'absolute';
            msg.style.left = (noBtn.offsetLeft + noBtn.clientWidth / 2) + 'px';
            msg.style.top = (noBtn.offsetTop - 30) + 'px';
            msg.style.transform = 'translateX(-50%)';
            msg.style.background = 'rgba(0,0,0,0.7)';
            msg.style.color = '#fff';
            msg.style.padding = '6px 12px';
            msg.style.borderRadius = '8px';
            msg.style.opacity = '1';
            msg.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out';
            popup.appendChild(msg);

            setTimeout(() => {
                msg.style.opacity = '0';
                msg.style.transform = 'translate(-50%, -20px)';
            }, 50);

            setTimeout(() => msg.remove(), 1600);
        });

        // Loading dots animation (moved outside so Yes button can access)
        let loadingInterval;
        function startLoadingAnimation() {
            const loadingText = document.getElementById('loadingText');
            let dots = 0;
            loadingInterval = setInterval(() => {
                dots = (dots + 1) % 4;
                loadingText.textContent = 'Wait po, ihi lang akuu' + '.'.repeat(dots);
            }, 500);
        }
        function stopLoadingAnimation() {
            clearInterval(loadingInterval);
        }

        // Yes button
        const yesBtn = document.getElementById('yesBtn');
        yesBtn.addEventListener('click', () => {
            popup.style.display = 'none';
            const loading = document.getElementById('loading');
            loading.style.display = 'block';
            startLoadingAnimation();

            setTimeout(() => {
                stopLoadingAnimation();
                loading.style.display = 'none';
                document.getElementById('surprise').style.display = 'block';
                document.getElementById('music').play();
            }, 3000);
        });

        // Flip card toggle
        const flipCard = document.querySelector('.flip-card');
        flipCard.addEventListener('click', () => {
            flipCard.classList.toggle('flipped');
        });

        // Tula popup
        const letter = document.querySelector('.letter');
        const tulaPopup = document.getElementById('tulaPopup');
        const closeTula = document.getElementById('closeTula');

        letter.addEventListener('click', () => {
            tulaPopup.style.display = 'block';
        });

        closeTula.addEventListener('click', () => {
            tulaPopup.style.display = 'none';
        });