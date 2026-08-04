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