import { Injectable, signal } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class ThemeService {
	themeSignal = signal<string>("dark");

	setTheme(theme: string) {
		this.themeSignal.set(theme);
	}

	toggleTheme() {
		this.themeSignal.update((value) => (value === "dark" ? "light" : "dark"));
	}
}
