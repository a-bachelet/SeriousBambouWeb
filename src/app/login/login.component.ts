import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bambou-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public login() {
    this.http.post('/api/auth/login', { username: this.username, password: this.password }).subscribe(
      success => {
        localStorage.setItem('apikey', success['authToken']);
      },
      error => {
        console.log(error);
      },
      () => {
      }
    );
  }

}
