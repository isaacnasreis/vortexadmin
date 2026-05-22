import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsStore } from '../../store/settings.store';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, InputTextModule, TagModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  settingsStore = inject(SettingsStore);
  users: any[] = [];
  
  ngOnInit() {
    this.users = [
      { id: '1001', name: 'Isaac N. Reis', email: 'isaac@vortex.com', role: 'Admin', status: 'Active', lastLogin: '2026-05-21' },
      { id: '1002', name: 'James Holden', email: 'james@rocinante.com', role: 'User', status: 'Active', lastLogin: '2026-05-20' },
      { id: '1003', name: 'Amos Burton', email: 'amos@rocinante.com', role: 'User', status: 'Inactive', lastLogin: '2026-05-15' },
      { id: '1004', name: 'Naomi Nagata', email: 'naomi@rocinante.com', role: 'Engineer', status: 'Active', lastLogin: '2026-05-21' },
      { id: '1005', name: 'Alex Kamal', email: 'alex@rocinante.com', role: 'User', status: 'Pending', lastLogin: '2026-05-18' }
    ];
  }

  getSeverity(status: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' {
    switch (status) {
      case 'Active': return 'success';
      case 'Inactive': return 'danger';
      case 'Pending': return 'warn';
      default: return 'info';
    }
  }
}
