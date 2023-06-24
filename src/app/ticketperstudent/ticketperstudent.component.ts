import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-ticketperstudent',
  templateUrl: './ticketperstudent.component.html',
  styleUrls: ['./ticketperstudent.component.css'],
})
export class TicketperstudentComponent {
  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private Router: Router
  ) {}

  students: { id: number; username: string; password: string; role: string }[] =
    [];
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

  openstudentticket() {
    const token = this.cookie.get('token');
    const headers = new HttpHeaders().set('Authorization', token);
    this.get();
  }
  goto(path: string) {
    this.Router.navigate([`/${path}`]);
  }
  get() {
    const token = this.cookie.get('token');
    const headers = new HttpHeaders().set('Authorization', token);

    this.http.get('http://localhost:8080/getStudentet', { headers }).subscribe(
      (reponse: any) => {
        this.students = reponse;
        console.log(reponse);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  logout() {
    this.Router.navigate(['/']);
    this.cookie.deleteAll();
  }
  getTicketperstudnet(x: number) {
    const token = this.cookie.get('token');
    const headers = new HttpHeaders().set('Authorization', token);

    this.http
      .get(`http://localhost:8080/getTicketPerstudnet/${x}`, { headers })
      .subscribe(
        (reponse: any) => {
          this.tablerow = reponse;
          console.log(reponse);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
