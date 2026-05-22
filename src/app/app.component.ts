import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SettingsStore } from './store/settings.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  settingsStore = inject(SettingsStore);

  ngOnInit() {
    this.settingsStore.setTheme(this.settingsStore.theme());
  }
}
