import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }
  logIn(email: string, password: string) {
      let login = new Login(email,password)
      console.log(login);
      this.dataService.login(login);
  }
}
