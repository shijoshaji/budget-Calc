import { Component, Input, OnInit } from '@angular/core';
import { BudgetItemModel } from '../utilities/budget-item.model';

@Component({
  selector: 'app-edit-budget-modal',
  templateUrl: './edit-budget-modal.component.html',
  styleUrls: ['./edit-budget-modal.component.scss']
})
export class EditBudgetModalComponent implements OnInit {

  @Input() item: BudgetItemModel = {} as BudgetItemModel;
  constructor() { }

  ngOnInit(): void {
  }

  onEdit(itemToEdit: BudgetItemModel) {
    console.log('EDIT', itemToEdit);


  }

}
