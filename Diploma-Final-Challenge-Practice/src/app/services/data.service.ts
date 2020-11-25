import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Login } from '../models/login';
import { CoffeeDates } from '../models/coffee-dates';
import { Members } from '../models/members';
import { NewCoffeeDates } from '../models/new-coffee-dates';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL: string = "https://localhost:5001/api/";
  FutureDates: CoffeeDates[];
  PastCoffeeDates:CoffeeDates[];
  loggedInMember: any;

  constructor(private _http: HttpClient, private router: Router) {
  }
  login(login: Login) {
    return new Promise((resolve, reject) => {
      this._http.post(this.apiURL + "CoffeeDates/login", login).subscribe(
       res => {
        console.log(res);
        this.loggedInMember = res;
        this.router.navigate(['/main-dash']);
        resolve();
      },
      err => {
        console.log(err);
        reject();
      })
    })
  }
  GetFutureCoffeeDates(){
    return new Promise((resolve, reject) => {
      this._http.get<CoffeeDates[]>(this.apiURL + "CoffeeDates/GetFutureBookings").subscribe(
        res => {
          console.log(res);
          this.FutureDates = res;
          resolve();
        },
        err => {
          console.log(err);
          
          reject();
        })
    })
  }
  Signup(member: Members) {
    console.log(member);
    return new Promise((resolve, reject) => {
      this._http.post(this.apiURL + "Members/signup", member).subscribe(
       res => {
        console.log(res);
        resolve();
      },
      err => {
        console.log(err);
        reject();
      })
    })
  }
  NewCoffeeDate(newdate: NewCoffeeDates) {
    console.log(newdate);
    return new Promise((resolve, reject) => {
      this._http.post(this.apiURL + "CoffeeDates/PostBooking", newdate).subscribe(
       res => {
        console.log(res);
        resolve();
      },
      err => {
        console.log(err);
        reject();
      })
    })
  }
}