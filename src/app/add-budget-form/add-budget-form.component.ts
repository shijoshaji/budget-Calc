import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItemModel } from '../utilities/budget-item.model';

@Component({
  selector: 'app-add-budget-form',
  templateUrl: './add-budget-form.component.html',
  styleUrls: ['./add-budget-form.component.scss']
})
export class AddBudgetFormComponent implements OnInit {

  @Input() budgetFormItem: BudgetItemModel = {} as BudgetItemModel;

  @Output()
  formSubmit: EventEmitter<BudgetItemModel> = new EventEmitter<BudgetItemModel>();

  isNewItem: boolean = true;
  btnTitle: string = 'Add';
  isIncome = true;

  constructor() { }



  ngOnInit(): void {
    let status = Object.keys(this.budgetFormItem).length;
    if (status !== 0) {
      this.isNewItem = false;
      this.btnTitle = 'Update';
    }
  }


  submitForm(form: NgForm) {
    // sending data to parent
    // decide if its expense or income
    if (!this.isIncome) {
      form.value['amount'] = -Math.abs(form.value['amount']);
    }
    this.formSubmit.emit(form.value);
    // form.reset();
    form.resetForm();


  }

}
