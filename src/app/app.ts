import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '@/services/theme.service';
import { ThemeToggle } from '@/components/theme-toggle/theme-toggle';

@Component({
  imports: [RouterOutlet, ThemeToggle],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  constructor() {
    inject(ThemeService);
  }
}