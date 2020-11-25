import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingCoffeDatesComponent } from './upcoming-coffe-dates.component';

describe('UpcomingCoffeDatesComponent', () => {
  let component: UpcomingCoffeDatesComponent;
  let fixture: ComponentFixture<UpcomingCoffeDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingCoffeDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingCoffeDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
