import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-student-home-component',
  templateUrl: './student-home-component.component.html',
  styleUrls: ['./student-home-component.component.css'],
})
export class StudentHomeComponentComponent {
  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private Router: Router
  ) {}

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
  logout() {
    this.cookie.deleteAll();
    this.Router.navigate(['/']);
  }

  get() {
    const token = this.cookie.get('token');
    const headers = new HttpHeaders().set('Authorization', token);

    this.http
      .get('http://localhost:8080/getTicketPerstudnet', { headers })
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
