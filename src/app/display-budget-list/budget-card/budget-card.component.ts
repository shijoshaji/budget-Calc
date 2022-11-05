import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-card',
  templateUrl: './budget-card.component.html',
  styleUrls: ['./budget-card.component.scss']
})
export class BudgetCardComponent implements OnInit {

  @Input()
  isIncome: boolean | undefined;

  amount = 150;
  currencyType = 'INR';
  constructor() { }

  ngOnInit(): void {
  }

  deleteBudget() {
    console.log('deleted');

  }

}
