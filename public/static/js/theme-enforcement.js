function enforceTheme() {
    const storedTheme = localStorage.theme ?? "system";

    switch (storedTheme) {
        case "dark":
            document.documentElement.classList.toggle("dark", true);
            document.documentElement.classList.toggle("light", false);
            break;
        case "light":
            document.documentElement.classList.toggle("dark", false);
            document.documentElement.classList.toggle("light", true);
            break;
        case "system":
            document.documentElement.classList.toggle(
                "dark",
                window.matchMedia("(prefers-color-scheme: dark)").matches,
            );
            document.documentElement.classList.toggle(
                "light",
                window.matchMedia("(prefers-color-scheme: light)").matches,
            );
    }
}

function storageListener(event) {
    enforceTheme();
}

window.addEventListener("storage", storageListener);

enforceTheme();
