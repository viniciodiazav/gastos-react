export type CategorT = {
    id: string;
    name: string;
    icon: string;
}

export type ExpenseT = {
    id: string;
    name: string;
    amount: number;
    category: string;
    date: string;
}

export type initialExpenseT = Omit<ExpenseT, 'id'>;