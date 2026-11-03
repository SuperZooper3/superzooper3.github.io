document.querySelectorAll("[data-game-launcher]").forEach((launcher) => {
    const button = launcher.querySelector(".game-play-button");
    const player = launcher.querySelector(".game-player");
    const frame = player.querySelector("iframe");

    button.addEventListener("click", () => {
        // Keep the Python/WebAssembly download behind an explicit play action.
        frame.src = frame.dataset.src;
        player.hidden = false;
        button.setAttribute("aria-expanded", "true");
        button.hidden = true;
        frame.focus();
    }, { once: true });
});
