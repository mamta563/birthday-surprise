document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("surpriseBtn");
    const message = document.getElementById("message");
    const music = document.getElementById("music");

    if (btn) {
        btn.addEventListener("click", () => {
            if (message) {
                message.classList.remove("hidden");
            }
            btn.style.display = "none";

            if (music) {
                music.play().catch(error => console.log("Audio play blocked:", error));
            }

            setTimeout(() => {
                alert("🎂 Happy Birthday My Lovely Sister ❤️\n\nMay God bless you with happiness, success, good health and lots of love.\n\nLove You Forever ❤️\n\n- Mamta Kumari");
            }, 1000);
        });
    }
});

function openGift() {
    const giftBox = document.getElementById("gift-box");
    if (giftBox) {
        giftBox.innerHTML = "❤️";
    }
    
    const surpriseMessage = document.getElementById("surprise-message");
    if (surpriseMessage) {
        surpriseMessage.style.display = "block";
        surpriseMessage.classList.remove("hidden");
    }
    
    const music = document.getElementById("music");
    if (music) {
        music.play().catch(error => console.log("Audio play blocked:", error));
    }
}

// Fixed function name to match 'revealSecret' in HTML
function revealSecret(element, text) {
    element.innerText = text;
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(createHeart, 400);
