"use client";

import { useCallback, useLayoutEffect, useSyncExternalStore } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import {
  applyTheme,
  persistTheme,
  resolveTheme,
  themeStorageKey,
  type ThemeChoice,
} from "@/lib/theme";

const listeners = new Set<() => void>();

function emitTheme() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);

  const media = window.matchMedia("(prefers-color-scheme: dark)");

  function onPreferenceChange() {
    try {
      if (localStorage.getItem(themeStorageKey)) {
        return;
      }
    } catch {
      return;
    }

    applyTheme(media.matches ? "dark" : "light");
    listener();
  }

  media.addEventListener("change", onPreferenceChange);
  return () => {
    listeners.delete(listener);
    media.removeEventListener("change", onPreferenceChange);
  };
}

function getSnapshot() {
  return resolveTheme();
}

function getServerSnapshot(): ThemeChoice {
  return "light";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useLayoutEffect(() => {
    applyTheme(resolveTheme());
  }, []);

  const onThemeChange = useCallback((next: ThemeChoice) => {
    try {
      applyTheme(next);
      persistTheme(next);
      emitTheme();
    } catch {
      applyTheme(resolveTheme());
    }
  }, []);

  return (
    <AnimatedThemeToggler
      theme={theme}
      onThemeChange={onThemeChange}
      duration={500}
      className="inline-flex size-8 items-center justify-center text-quiet transition-colors hover:text-ink [&_svg]:size-4"
    />
  );
}
