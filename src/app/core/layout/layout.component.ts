import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthStore } from '../../store/auth.store';
import { SettingsStore } from '../../store/settings.store';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, DialogModule, ButtonModule, DropdownModule, FormsModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  authStore = inject(AuthStore);
  settingsStore = inject(SettingsStore);

  themeOptions = [
    { label: 'Dark Mode', value: 'dark' },
    { label: 'Light Mode', value: 'light' }
  ];

  languageOptions = [
    { label: 'Português (BR)', value: 'pt' },
    { label: 'English (US)', value: 'en' }
  ];

  onThemeChange(event: any) {
    this.settingsStore.setTheme(event.value);
  }

  onLanguageChange(event: any) {
    this.settingsStore.setLanguage(event.value);
  }

  prevent(event: Event) {
    event.preventDefault();
  }
}
