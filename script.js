document.addEventListener("DOMContentLoaded", function() {
    for(let i = 0; i < 20; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        document.body.appendChild(star);
        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.animationDelay = Math.random() * 3 + "s";
    }
});
