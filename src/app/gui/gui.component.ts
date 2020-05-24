import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { Client } from '../client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-gui',
  templateUrl: './gui.component.html',
  styleUrls: ['./gui.component.css'],
})
export class GuiComponent implements OnInit {
  constructor(private clientService: ClientService) {}

  clientTotal = this.clientService.getClients();
  clientCount: number = this.getClientCount();
  public barChartOptions: ChartOptions = {
    title: {},
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [
        {
          ticks: {
            fontSize: 16,
            padding: 0,
            fontColor: '#000',
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            max: this.clientCount / 2 + this.clientCount,
            stepSize: 1,
          },
        },
      ],
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  // public barChartLabels: Label[] = ['Fall Semester 2020'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartLabels = ['Fall Semester 2020'];
  public barChartPlugins = [pluginDataLabels];
  public barChartData: ChartDataSets[] = [
    {
      data: [this.clientCount],
      label: 'Projects in Queue',
    },

    { data: [1], label: "Backup's being used" },
  ];

  ngOnInit() {}

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public getData(): void {
    // returns total inqueue
    const data = [3, 1];
    const data1 = [1];

    this.barChartData[0].data = data;
    this.barChartData[1].data = data1;
  }

  getClientCount(): number {
    let client: Client[];
    this.clientService.getClients().subscribe((clients) => (client = clients));
    return client.length;
  }
}
