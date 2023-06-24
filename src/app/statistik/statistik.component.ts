import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-statistik',
  templateUrl: './statistik.component.html',
  styleUrls: ['./statistik.component.css'],
})
export class StatistikComponent {
  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private Router: Router
  ) {}
  tablerowpjes: { name: String; totali: number }[] = [];
  tablerowStudent: { name: String; totali: number }[] = [];

  goto(path: string) {
    this.Router.navigate([`/${path}`]);
  }

  logout() {
    this.Router.navigate(['/']);
    this.cookie.deleteAll();
  }

  ngOnInit() {
    this.get();
  }

  get() {
    const token = this.cookie.get('token');
    const headers = new HttpHeaders().set('Authorization', token);

    this.http.get('http://localhost:8080/getSTatisktik', { headers }).subscribe(
      (reponse: any) => {
        this.tablerowStudent = reponse[0];
        this.tablerowpjes = reponse[1];
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
