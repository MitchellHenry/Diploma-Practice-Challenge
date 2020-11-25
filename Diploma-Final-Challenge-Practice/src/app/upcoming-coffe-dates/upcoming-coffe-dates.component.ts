import { Component, OnInit } from '@angular/core';
import { CoffeeDates } from '../models/coffee-dates';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-upcoming-coffe-dates',
  templateUrl: './upcoming-coffe-dates.component.html',
  styleUrls: ['./upcoming-coffe-dates.component.css']
})
export class UpcomingCoffeDatesComponent implements OnInit {
  constructor(private dataservice: DataService) { 

  }

  ngOnInit(): void {
    this.dataservice.GetFutureCoffeeDates();
  }

}
