const themeToggleBtn = document.getElementById("theme-toggle");
const THEME_STORAGE_KEY = "portfolio-theme";

function applyTheme(isDark) {
    document.body.classList.toggle("dark-theme", isDark);

    if (themeToggleBtn) {
        themeToggleBtn.textContent = isDark ? "☀️ Tema Claro" : "🌙 Tema Escuro";
        themeToggleBtn.setAttribute(
            "aria-label",
            isDark ? "Ativar tema claro" : "Ativar tema escuro"
        );
    }
}

// Carrega o tema salvo anteriormente, se existir
const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
applyTheme(savedTheme === "dark");

if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
        const isDarkNow = !document.body.classList.contains("dark-theme");
        applyTheme(isDarkNow);
        localStorage.setItem(THEME_STORAGE_KEY, isDarkNow ? "dark" : "light");
    });
}