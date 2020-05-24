import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../client';

@Component({
  selector: 'app-priority-list',
  templateUrl: './priority-list.component.html',
  styleUrls: ['./priority-list.component.css'],
})
export class PriorityListComponent implements OnInit {
  constructor(private clientService: ClientService) {}
  clients: Client[] = [];
  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.clientService
      .getClients()
      .subscribe((clients) => (this.clients = clients.slice(0, 3)));
  }
}
