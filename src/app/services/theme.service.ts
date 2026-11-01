import { Injectable, effect, signal } from '@angular/core';
import { applyTheme, resolveTheme, THEME_STORAGE_KEY, type Theme } from '@/lib/theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    readonly theme = signal<Theme>(resolveTheme());

    constructor() {
        effect(() => {
        const theme = this.theme();
        applyTheme(theme);
        localStorage.setItem(THEME_STORAGE_KEY, theme);
        });
    }

    setTheme(theme: Theme) {
        this.theme.set(theme);
    }

    toggleTheme() {
        this.theme.update((current) => (current === 'light' ? 'dark' : 'light'));
    }
}