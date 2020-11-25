import { Component, OnInit } from '@angular/core';
import { Members } from '../models/members';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  name: string;
  email: string;
  password: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  signup(email:string,password:string,name:string){
   let member: Members = new Members(email,name,password,"pending");
   console.log(member)
   this.dataService.Signup(member)
  }
}
