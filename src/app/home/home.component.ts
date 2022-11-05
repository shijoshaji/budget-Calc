import { Component, OnInit } from '@angular/core';
import { BudgetItemModel } from '../utilities/budget-item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  budgetList: BudgetItemModel[] = new Array<BudgetItemModel>();

  ngOnInit(): void {

  }

  addItemToList(newItem: BudgetItemModel) {
    console.log('Item recevied in parent', newItem);
    this.budgetList.push(newItem);
  }


  deleteItemFromList(oldItem: BudgetItemModel) {
    console.log('deleted');
    let index = this.budgetList.indexOf(oldItem);
    this.budgetList.splice(index, 1);


  }
}
