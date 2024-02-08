import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  activeTheme: string = 'dark';

  constructor() { }

  getTheme(): string {
    return this.activeTheme;
  }

  setTheme(theme: string): void {
    let themeLink = document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + '.css';
    }
    this.activeTheme = theme;
    // Load CSS or update angular.json paths (if implemented)
  }
}
