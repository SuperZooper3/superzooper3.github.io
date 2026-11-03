document.querySelectorAll("[data-game-launcher]").forEach((launcher) => {
    const button = launcher.querySelector(".game-play-button");
    const preview = launcher.querySelector(".game-preview");
    const player = launcher.querySelector(".game-player");
    const frame = player.querySelector("iframe");

    button.addEventListener("click", () => {
        // Show a lightweight preview until the visitor chooses to play.
        frame.src = frame.dataset.src;
        player.hidden = false;
        button.setAttribute("aria-expanded", "true");
        preview.hidden = true;
        frame.focus();
    }, { once: true });
});
