import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainDashComponent } from './main-dash/main-dash.component';
import { NewCoffeeDateComponent } from './new-coffee-date/new-coffee-date.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpcomingCoffeDatesComponent } from './upcoming-coffe-dates/upcoming-coffe-dates.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
{ path: 'login', component: LoginComponent},
{ path: 'signup', component: SignUpComponent},
{ path: 'main-dash', component: MainDashComponent},
{ path: 'upcoming-coffee-dates', component: UpcomingCoffeDatesComponent},
{ path: 'new-coffee-date', component: NewCoffeeDateComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
