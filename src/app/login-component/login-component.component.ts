import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent {
  constructor(
    private HttpClient: HttpClient,
    private CookieService: CookieService,
    private navigate: Router
  ) {}
  public listtoimport = [
    { username: 'student1', password: 'student1password', role: 'student' },
    { username: 'student2', password: 'student2password', role: 'student' },
    { username: 'student3', password: 'student3password', role: 'student' },
    { username: 'admin', password: 'adminpassword', role: 'admin' },
  ];
  public error = '';
  ngOnInit() {
    this.HttpClient.post(
      'http://localhost:8080/insertdata',
      this.listtoimport,
      { responseType: 'text' }
    )
      .pipe(
        catchError(
          catchError((error) => {
            console.log('Error occurred:', error);
            return throwError('Something went wrong');
          })
        )
      )
      .subscribe((response: any) => {
        console.log(response);
      });
  }
  public username = '';
  public password = '';
  login() {
    const body = { username: this.username, password: this.password, role: '' };

    this.HttpClient.post('http://localhost:8080/login', body)
      .pipe(
        catchError((error: HttpErrorResponse): Observable<any> => {
          //  console.error('An error occurred:', error.message);

          return throwError((this.error = 'Data is not correct'));
        })
      )
      .subscribe((response: any) => {
        if (response[1] == 'admin') {
          this.navigate.navigate(['/admin']);
        }
        if (response[1] == 'student') {
          this.navigate.navigate(['/student']);
        }
        this.CookieService.set('token', response[0]);
      });
  }
}
