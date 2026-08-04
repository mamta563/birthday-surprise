const btn = document.getElementById("surpriseBtn");
const message = document.getElementById("message");
const music = document.getElementById("music");

btn.addEventListener("click", () => {
    message.classList.remove("hidden");
    btn.style.display = "none";

    if (music) {
        music.play();
    }

    setTimeout(() => {
        alert("🎂 Happy Birthday My Lovely Sister ❤️\n\nMay God bless you with happiness, success, good health and lots of love.\n\nLove You Forever ❤️\n\n- Mamta Kumari");
    }, 1000);
});
function openGift() {
    // Change the gift box to an open box or heart
    document.getElementById("gift-box").innerHTML = "💖";
    
    // Show the hidden surprise message
    document.getElementById("surprise-message").style.display = "block";
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
const birthDate = new Date("2000-01-01T00:00:00"); // Change to her birth date (YYYY-MM-DD)

function updateCountdown() {
    const now = new Date();
    const diff = now - birthDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);

    const counterElement = document.getElementById("countdown");
    if (counterElement) {
        counterElement.innerText = `${days} Days, ${hours} Hours, ${minutes} Minutes`;
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();
