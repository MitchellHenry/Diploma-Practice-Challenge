import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Diploma-Final-Challenge-Practice';

  loggedIn: boolean;
  signedUp: boolean;
  constructor(private dataService: DataService){

}
}