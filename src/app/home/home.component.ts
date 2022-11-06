import { Component, OnInit } from '@angular/core';
import { BudgetItemModel, updateBudget } from '../utilities/budget-item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  totalBudget: number = 0;
  amountType: string = 'INR';

  budgetList: BudgetItemModel[] = new Array<BudgetItemModel>();

  ngOnInit(): void {

  }

  addItemToList(newItem: BudgetItemModel) {
    console.log('Item recevied in parent', newItem);
    this.budgetList.push(newItem);
    this.totalBudget += newItem.amount;
  }


  deleteItemFromList(oldItem: BudgetItemModel) {
    console.log('deleted');
    let index = this.budgetList.indexOf(oldItem);
    this.budgetList.splice(index, 1);
    this.totalBudget -= oldItem.amount;
  }


  updateItem(updateItem: updateBudget) {
    this.budgetList[this.budgetList.indexOf(updateItem.oldBudget)] = updateItem.newBudget;
    this.totalBudget -= updateItem.oldBudget.amount;
    this.totalBudget += updateItem.newBudget.amount;
  }

  setLocal(values: any) {
    // TODO: need to see how to store to local and get results
    // localStorage.setItem('BudgetItemsLocal', JSON.stringify(values));
  }
}
