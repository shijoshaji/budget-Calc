import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBudgetFormComponent } from '../add-budget-form/add-budget-form.component';
import { EditBudgetModalComponent } from '../edit-budget-modal/edit-budget-modal.component';
import { BudgetItemModel, updateBudget } from '../utilities/budget-item.model';

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

  @Output()
  update: EventEmitter<updateBudget> = new EventEmitter<updateBudget>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteItem(itemToDelete: BudgetItemModel) {
    console.log('called delete from parent', itemToDelete);
    this.delete.emit(itemToDelete);

  }

  onCardClicked(itemToEdit: BudgetItemModel) {
    console.log('haha', itemToEdit);
    const dialogRef = this.dialog.open(EditBudgetModalComponent, { data: itemToEdit });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this.budgetItemsList[this.budgetItemsList.indexOf(itemToEdit)] = result;
        this.update.emit({
          oldBudget: itemToEdit,
          newBudget: result
        });
      }
    });

  }

}
