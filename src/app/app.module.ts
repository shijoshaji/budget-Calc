import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddBudgetFormComponent } from './add-budget-form/add-budget-form.component';
import { DisplayBudgetListComponent } from './display-budget-list/display-budget-list.component';
import { BudgetCardComponent } from './display-budget-list/budget-card/budget-card.component';
import { FormsModule } from '@angular/forms';
import { EditBudgetModalComponent } from './edit-budget-modal/edit-budget-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddBudgetFormComponent,
    DisplayBudgetListComponent,
    BudgetCardComponent,
    EditBudgetModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
