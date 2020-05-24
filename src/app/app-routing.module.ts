import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { GuiComponent } from './gui/gui.component';
import { PriorityListComponent } from './priority-list/priority-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: ClientDetailComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'gui', component: GuiComponent },
  { path: 'priority', component: PriorityListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
