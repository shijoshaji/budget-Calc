import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddBudgetFormComponent } from './add-budget-form/add-budget-form.component';
import { DisplayBudgetListComponent } from './display-budget-list/display-budget-list.component';
import { BudgetCardComponent } from './display-budget-list/budget-card/budget-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddBudgetFormComponent,
    DisplayBudgetListComponent,
    BudgetCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
