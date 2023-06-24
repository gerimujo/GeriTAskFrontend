import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponentAdminComponent } from './home-component-admin/home-component-admin.component';
import { StudentHomeComponentComponent } from './student-home-component/student-home-component.component';
import { TicketAdminComponent } from './ticket-admin/ticket-admin.component';
import { TicketperstudentComponent } from './ticketperstudent/ticketperstudent.component';
import { StatistikComponent } from './statistik/statistik.component';

@NgModule({
  declarations: [AppComponent, LoginComponentComponent, HomeComponentAdminComponent, StudentHomeComponentComponent, TicketAdminComponent, TicketperstudentComponent, StatistikComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
