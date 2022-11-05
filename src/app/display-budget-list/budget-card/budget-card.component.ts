import { Component, Input, OnInit } from '@angular/core';
import { BudgetItemModel } from 'src/app/utilities/budget-item.model';

@Component({
  selector: 'app-budget-card',
  templateUrl: './budget-card.component.html',
  styleUrls: ['./budget-card.component.scss']
})
export class BudgetCardComponent implements OnInit {

  @Input()
  eachItem: BudgetItemModel={} as BudgetItemModel

  // amount = 150;
  currencyType = 'INR';
  constructor() { }

  ngOnInit(): void {
  }

  deleteBudget() {
    console.log('deleted',this.eachItem);

  }

}
