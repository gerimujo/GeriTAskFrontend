import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponentAdminComponent } from './home-component-admin/home-component-admin.component';
import { StudentHomeComponentComponent } from './student-home-component/student-home-component.component';
import { TicketAdminComponent } from './ticket-admin/ticket-admin.component';
import { TicketperstudentComponent } from './ticketperstudent/ticketperstudent.component';
import { StatistikComponent } from './statistik/statistik.component';

const routes: Routes = [
  { path: '', component: LoginComponentComponent },
  { path: 'admin', component: HomeComponentAdminComponent },
  { path: 'student', component: StudentHomeComponentComponent },
  { path: 'adminticket', component: TicketAdminComponent },
  { path: 'ticketperstudnet', component: TicketperstudentComponent },
  { path: 'statistik', component: StatistikComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
