import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItemModel } from 'src/app/utilities/budget-item.model';

@Component({
  selector: 'app-budget-card',
  templateUrl: './budget-card.component.html',
  styleUrls: ['./budget-card.component.scss']
})
export class BudgetCardComponent implements OnInit {

  @Input()
  eachItem: BudgetItemModel = {} as BudgetItemModel;

  @Output()
  deleteBudgetClick: EventEmitter<BudgetItemModel> = new EventEmitter<BudgetItemModel>();

  @Output()
  cardClicked: EventEmitter<BudgetItemModel> = new EventEmitter<BudgetItemModel>();

  // amount = 150;
  currencyType = 'INR';
  constructor() { }

  ngOnInit(): void {
  }

  deleteBudget() {
    console.log('deleted sending from child to delete from main array', this.eachItem);
    this.deleteBudgetClick.emit();

  }

  onCardClick(item: BudgetItemModel) {
    console.log('each item clicked', item);
    this.cardClicked.emit();

  }

}
