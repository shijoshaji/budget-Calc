import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBudgetListComponent } from './display-budget-list.component';

describe('DisplayBudgetListComponent', () => {
  let component: DisplayBudgetListComponent;
  let fixture: ComponentFixture<DisplayBudgetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayBudgetListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayBudgetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
