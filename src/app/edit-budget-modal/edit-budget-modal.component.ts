import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BudgetItemModel } from '../utilities/budget-item.model';

@Component({
  selector: 'app-edit-budget-modal',
  templateUrl: './edit-budget-modal.component.html',
  styleUrls: ['./edit-budget-modal.component.scss']
})
export class EditBudgetModalComponent implements OnInit {

  // @Input() item: BudgetItemModel = {} as BudgetItemModel;  //removed since it comes via modal

  constructor(public dialogRef: MatDialogRef<EditBudgetModalComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItemModel) { }

  ngOnInit(): void {
  }

  onEdit(itemToEdit: BudgetItemModel) {
    console.log('EDIT', itemToEdit);
    this.dialogRef.close(itemToEdit);


  }

}
