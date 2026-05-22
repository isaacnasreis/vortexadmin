import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthStore } from '../../../store/auth.store';
import { SettingsStore } from '../../../store/settings.store';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  authStore = inject(AuthStore);
  settingsStore = inject(SettingsStore);
  router = inject(Router);

  email = '';
  password = '';

  onLogin() {
    this.authStore.login('Admin User', this.email);
    setTimeout(() => {
      if (this.authStore.isAuthenticated()) {
        this.router.navigate(['/dashboard']);
      }
    }, 1200);
  }
}
