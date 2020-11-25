import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCoffeeDateComponent } from './new-coffee-date.component';

describe('NewCoffeeDateComponent', () => {
  let component: NewCoffeeDateComponent;
  let fixture: ComponentFixture<NewCoffeeDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCoffeeDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCoffeeDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
