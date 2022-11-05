import { Component, Input, OnInit } from '@angular/core';
import { BudgetItemModel } from '../utilities/budget-item.model';

@Component({
  selector: 'app-display-budget-list',
  templateUrl: './display-budget-list.component.html',
  styleUrls: ['./display-budget-list.component.scss']
})
export class DisplayBudgetListComponent implements OnInit {

  @Input()
  budgetItemsList: BudgetItemModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
