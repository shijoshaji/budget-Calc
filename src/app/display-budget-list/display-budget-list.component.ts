import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BudgetItemModel } from '../utilities/budget-item.model';

@Component({
  selector: 'app-display-budget-list',
  templateUrl: './display-budget-list.component.html',
  styleUrls: ['./display-budget-list.component.scss']
})
export class DisplayBudgetListComponent implements OnInit {

  @Input()
  budgetItemsList: BudgetItemModel[] = [];

  @Output()
  delete: EventEmitter<BudgetItemModel> = new EventEmitter<BudgetItemModel>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(itemToDelete: BudgetItemModel) {
    console.log('called delete from parent', itemToDelete);
    this.delete.emit(itemToDelete);

  }

}
