import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-component-admin',
  templateUrl: './home-component-admin.component.html',
  styleUrls: ['./home-component-admin.component.css'],
})
export class HomeComponentAdminComponent {
  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private nav: Router
  ) {}

  public name = '';
  public description = '';
  public Cmimi = '';
  public Stock = '';
  idpjestcket = 0;
  namepjesticket = 0;
  students: {
    id: number;
    username: string;
    password: string;
    role: string;
    check: boolean;
    description: String;
  }[] = [];
  public tabelrow = [
    { name: 'zz', description: 'kmaer', cmimi: 10, stock: 30 },
    { name: 'kamer', description: 'kmaer', cmimi: 10, stock: 30 },
    { name: 'kamer', description: 'kmaer', cmimi: 10, stock: 30 },
    { name: 'kamer', description: 'kmaer', cmimi: 10, stock: 30 },
  ];
  public id1 = 0;
  public name1 = '';
  public description1 = '';
  public Cmimi1 = '';
  public Stock1 = '';
  ngOnInit() {
    this.get();
  }
  public errorticket = '';
  clickStudents() {
    const token = this.cookie.get('token');
    const headers = new HttpHeaders().set('Authorization', token);

    const body = this.students.filter((d) => d.check == true);
    const body1 = body.map((d) => {
      return {
        id_laptop: d.id,
        id_pjese: this.idpjestcket,
        laptoppjese: this.idpjestcket,
        description: d.description,
        status: 'OPEN',
      };
    });

    this.http
      .post('http://localhost:8080/insertTicket', body1, {
        headers,
        responseType: 'text',
      })
      .subscribe(
        (response: any) => {
          console.log(response);
          this.get();
          this.displayticket = 'none';
          this.displaygri = 'none';
        },
        (error) => {
          this.errorticket = 'nuk ka me gjendje';
          console.error(error);
        }
      );
    console.log(body1);
  }

  get() {
    const token = this.cookie.get('token');
    const headers = new HttpHeaders().set('Authorization', token);
    console.log(token);
    this.http.get('http://localhost:8080/getpjeset', { headers }).subscribe(
      (response: any) => {
        this.students = response[1];
        const body = this.students.map((d) => {
          return { ...d, check: false, description: '' };
        });
        this.students = body;
        this.tabelrow = response[0];
      },
      (error) => {
        console.error(error);
      }
    );
  }
  public display1 = 'none';
  public displaygri = 'none';
  public displayticket = 'none';

  public update(x: any) {
    this.id1 = x.id;
    this.name1 = x.name;
    this.description1 = x.description;
    this.Cmimi1 = x.cmimi;
    this.Stock1 = x.stock;
    this.display1 = 'block';
    this.displaygri = 'block';
  }
  close() {
    this.display1 = 'none';
    this.displaygri = 'none';
    this.displayticket = 'none';
  }
  statistika() {
    this.nav.navigate(['/statistik']);
  }
  logout() {
    this.nav.navigate(['/']);
    this.cookie.deleteAll();
  }
  navigatetoticket() {
    this.nav.navigate(['/adminticket']);
  }
  navigatetostudent() {
    this.nav.navigate(['/ticketperstudnet']);
  }
  openticket(x: any) {
    this.idpjestcket = x.id;
    this.namepjesticket = x.name;
    this.displaygri = 'block';
    this.displayticket = 'block';
  }
  insertUpdate() {
    const token = this.cookie.get('token');

    const headers = new HttpHeaders().set('Authorization', token);
    const body = {
      id: this.id1,
      name: this.name1,
      description: this.description1,
      cmimi: this.Cmimi1,
      stock: this.Stock1,
    };

    this.http
      .put('http://localhost:8080/updatepjesa', body, {
        headers,
        responseType: 'text',
      })
      .subscribe(
        (response: any) => {
          this.display1 = 'none';
          this.displaygri = 'none';
          this.get();
        },
        (error) => {
          console.error(error);
        }
      );
  }
  insert() {
    const token = this.cookie.get('token');

    const headers = new HttpHeaders().set('Authorization', token);
    const body = {
      name: this.name,
      description: this.description,
      cmimi: this.Cmimi,
      stock: this.Stock,
    };

    this.http
      .post('http://localhost:8080/insertpjese', body, {
        headers,
        responseType: 'text',
      })
      .subscribe(
        (response: any) => {
          this.name = '';
          this.description = '';
          this.Cmimi = '';
          this.Stock = '';
          this.get();
        },
        (error) => {
          console.error(error);
        }
      );
  }

  delete(id: any) {
    console.log('clicke');
    const token = this.cookie.get('token');

    const headers = new HttpHeaders().set('Authorization', token);
    this.http
      .delete(`http://localhost:8080/deletepjes/${id.id}`, {
        headers,
        responseType: 'text',
      })
      .subscribe(
        (response: any) => {
          this.get();
          console.log(response);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
