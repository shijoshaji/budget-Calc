export interface BudgetItemModel {
    amount: number;
    description: string;

}

export interface updateBudget {
    oldBudget: BudgetItemModel;
    newBudget: BudgetItemModel;
}