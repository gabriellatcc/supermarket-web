import { Component, inject, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { ThemeService } from '@/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [NgIcon, HlmButtonImports],
  providers: [provideIcons({ lucideMoon, lucideSun })],
  templateUrl: './theme-toggle.html',
})
export class ThemeToggle {
  protected readonly themeService = inject(ThemeService);

  protected readonly rotation = signal(this.themeService.theme() === 'dark' ? 180 : 0);

  protected toggle() {
    const html = document.documentElement;
    html.classList.add('theme-transition');

    this.rotation.update((current) => current + 180);
    this.themeService.toggleTheme();

    setTimeout(() => html.classList.remove('theme-transition'), 1050);
  }
}