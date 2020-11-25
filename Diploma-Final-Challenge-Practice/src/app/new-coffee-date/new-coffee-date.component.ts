import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { NewCoffeeDates } from '../models/new-coffee-dates';

@Component({
  selector: 'app-new-coffee-date',
  templateUrl: './new-coffee-date.component.html',
  styleUrls: ['./new-coffee-date.component.css']
})
export class NewCoffeeDateComponent implements OnInit {

  date: Date;
  venue: string;
  constructor(private dataservice: DataService) {
    
   }

  ngOnInit(): void {
  }
  NewCoffeeDate(date:Date,venue:string){
    let newDate = new NewCoffeeDates(date,venue,"trump")
    console.log(newDate);
    this.dataservice.NewCoffeeDate(newDate);
  }
}
