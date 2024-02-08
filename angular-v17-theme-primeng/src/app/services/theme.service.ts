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
    this.activeTheme = theme;
    // Load CSS or update angular.json paths (if implemented)
  }
}
