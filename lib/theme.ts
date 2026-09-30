export const themeStorageKey = "dad-doggo-theme";

export const themeBootScript = `(function(){try{var stored=localStorage.getItem(${JSON.stringify(themeStorageKey)});var dark=stored==="dark"||(stored!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);var root=document.documentElement;root.classList.toggle("dark",dark);root.style.colorScheme=dark?"dark":"light";}catch(e){}})();`;

export type ThemeChoice = "light" | "dark";

export function resolveTheme(): ThemeChoice {
  try {
    const stored = localStorage.getItem(themeStorageKey);
    if (stored === "light" || stored === "dark") {
      return stored;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  } catch {
    return "light";
  }
}

export function applyTheme(theme: ThemeChoice) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function persistTheme(theme: ThemeChoice) {
  try {
    localStorage.setItem(themeStorageKey, theme);
  } catch {
    // The choice still applies for this view if storage is unavailable.
  }
}
