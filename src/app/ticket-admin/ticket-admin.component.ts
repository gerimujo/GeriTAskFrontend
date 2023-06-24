import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-ticket-admin',
  templateUrl: './ticket-admin.component.html',
  styleUrls: ['./ticket-admin.component.css'],
})
export class TicketAdminComponent {
  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private Router: Router
  ) {}
  logout() {
    this.Router.navigate(['/']);
    this.cookie.deleteAll();
  }
  public table = ['Emri i pjeses', 'Status', 'Emri i studentit', 'Description'];
  public tablerow: {
    id: number;
    descrition: string;
    id_laptop: number;
    id_pjese: number;
    pjeseName: string;
    status: string;
    studentName: string;
  }[] = [];

  ngOnInit() {
    this.get();
  }
  statistika() {
    this.Router.navigate(['/statistik']);
  }

  get() {
    const token = this.cookie.get('token');
    const headers = new HttpHeaders().set('Authorization', token);

    this.http.get('http://localhost:8080/getTicket', { headers }).subscribe(
      (reponse: any) => {
        this.tablerow = reponse;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  gotopart() {
    this.Router.navigate(['/admin']);
  }

  update(x: number) {
    const token = this.cookie.get('token');
    const headers = new HttpHeaders().set('Authorization', token);

    this.http
      .put(
        `http://localhost:8080/updateStatus/${x}`,
        {},
        {
          headers: headers,
          responseType: 'text',
        }
      )
      .subscribe(
        (response: any) => {
          this.get();
        },
        (error) => {
          console.error(error);
        }
      );
  }
  navigatetostudent() {
    this.Router.navigate(['/ticketperstudnet']);
  }

  deleteticket(x: number) {
    const token = this.cookie.get('token');
    const headers = new HttpHeaders().set('Authorization', token);

    this.http
      .delete(
        `http://localhost:8080/deleteticket/${x}`,

        {
          headers: headers,
          responseType: 'text',
        }
      )
      .subscribe(
        (response: any) => {
          this.get();
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
