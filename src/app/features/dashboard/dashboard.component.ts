import { Component, effect, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricsStore } from '../../store/metrics.store';
import { SettingsStore } from '../../store/settings.store';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ChartModule, CardModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  metricsStore = inject(MetricsStore);
  settingsStore = inject(SettingsStore);
  
  chartData: any;
  chartOptions: any;

  constructor() {
    effect(() => {
      const rawData = this.metricsStore.data();
      if (rawData.length > 0) {
        // Render chart with downsampled data to avoid DOM freeze with 500k points
        const sampled = rawData.filter((_, i) => i % 5000 === 0);
        
        this.chartData = {
          labels: sampled.map(d => new Date(d.timestamp).toLocaleTimeString()),
          datasets: [
            {
              label: 'Vortex Performance Index',
              data: sampled.map(d => d.value),
              fill: true,
              borderColor: '#3b82f6',
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              tension: 0.4
            }
          ]
        };
      }
    });

    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: '#f8fafc' } }
      },
      scales: {
        x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.1)' } },
        y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.1)' } }
      }
    };
  }

  ngOnInit() {
    this.metricsStore.loadData();
  }
}
