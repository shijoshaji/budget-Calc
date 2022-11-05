import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BudgetItem } from '../utilities/budget-item.model';

@Component({
  selector: 'app-add-budget-form',
  templateUrl: './add-budget-form.component.html',
  styleUrls: ['./add-budget-form.component.scss']
})
export class AddBudgetFormComponent implements OnInit {

  @Output()
  formSubmit = new EventEmitter<BudgetItem>();

  constructor() { }

  budgetForm: BudgetItem = {
    amount: 0,
    description: ""
  };

  ngOnInit(): void {
  }

  submitForm() {
    this.formSubmit.emit(this.budgetForm);

    console.log('add item', this.budgetForm);

  }

}
