import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, ToolbarModule, InputTextModule, ButtonModule, InputSwitchModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  checked: boolean = true;

}
