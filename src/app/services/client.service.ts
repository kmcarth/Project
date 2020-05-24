import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Client } from '../client';
import { CLIENTS } from '../mock-clients';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class ClientService {
  constructor(private messageService: MessageService) {}

  getClients(): Observable<Client[]> {
    // TODO: send the message _after_ fetching the clients
    this.messageService.add('ClientService: fetched clients');
    return of(CLIENTS);
  }

  getClient(id: number): Observable<Client> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`ClientService: fetched client id=${id}`);
    return of(CLIENTS.find((client) => client.id === id));
  }
}
