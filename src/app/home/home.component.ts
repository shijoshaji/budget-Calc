import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../utilities/budget-item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  bugetItem: BudgetItem[] = new Array<BudgetItem>();

  ngOnInit(): void {
  }

  addItem(item: BudgetItem) {
    console.log('Item recevied in parent', item);

  }

}
