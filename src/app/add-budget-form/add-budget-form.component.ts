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

  constructor() { }



  ngOnInit(): void {
  }

  // submitForm() {
  //   // sending data to parent
  //   console.log('add item to parent', this.budgetFormItem);
  //   this.formSubmit.emit(this.budgetFormItem);


  // }
  submitForm(form: NgForm) {
    // sending data to parent
    console.log('add item to parent', form.value);
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
