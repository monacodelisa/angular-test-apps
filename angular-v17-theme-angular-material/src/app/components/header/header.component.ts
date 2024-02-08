import { Component, inject } from "@angular/core";
import { ThemeService } from "../../services/theme.service";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatIconModule } from "@angular/material/icon";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [
		MatToolbarModule,
		MatButtonModule,
		MatSlideToggleModule,
		MatIconModule,
	],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
})
export class HeaderComponent {
	themeService: ThemeService = inject(ThemeService);
	theme = this.themeService.themeSignal();

	toggleTheme() {
		this.themeService.updateTheme();
	}
}
