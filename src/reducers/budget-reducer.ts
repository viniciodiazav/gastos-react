import type { ExpenseT, initialExpenseT } from "../types";
import { v4 as uuidv4 } from 'uuid'

export type BudgetActions =
    { type: 'add-budget', payload: { budget: number } } |
    { type: 'valid-budget' } |
    { type: 'open-modal' } |
    { type: 'close-modal' } |
    { type: 'add-expense', payload: { expense: initialExpenseT } } |
    { type: 'delete-expense', payload: { id: ExpenseT['id'] } } |
    { type: 'edit-expense', payload: { id: ExpenseT['id'] } } |
    { type: 'reset-app' }

const getExpensesLocalStorage = (): ExpenseT[] => {
    const expensesLS = localStorage.getItem('expenses');
    return expensesLS ? JSON.parse(expensesLS) : [];
}

const getBudgetLocalStorage = (): number => {
    const expensesLS = localStorage.getItem('budget');
    return expensesLS ? +JSON.parse(expensesLS) : 0;
}

export type BudgetStateT = {
    budget: number;
    validBudget: boolean;
    modal: boolean;
    expenses: ExpenseT[];
    editId: ExpenseT['id'];
}

export const initialbudgetState: BudgetStateT = {
    budget: getBudgetLocalStorage(),
    validBudget: getBudgetLocalStorage() !== 0 ? true : false,
    modal: false,
    expenses: getExpensesLocalStorage(),
    editId: '',
}

export const budgetReducer = (state: BudgetStateT = initialbudgetState, action: BudgetActions) => {
    if (action.type === 'add-budget') {
        return {
            ...state,
            budget: action.payload.budget
        }
    }
    if (action.type === 'valid-budget') {
        return {
            ...state,
            validBudget: true
        }
    }
    if (action.type === "open-modal") {
        return {
            ...state,
            modal: true
        }
    }
    if (action.type === "close-modal") {
        return {
            ...state,
            modal: false,
            editId: '',
        }
    }
    if (action.type === "add-expense") {
        let updateExpenses: ExpenseT[];
        if (state.editId !== '') {
            updateExpenses = state.expenses.map(e => {
                if (e.id === state.editId) {
                    e.amount = action.payload.expense.amount;
                    e.category = action.payload.expense.category;
                    e.date = action.payload.expense.date;
                    e.name = action.payload.expense.name;
                }
                return e;
            })
        } else {
            const newExpense: ExpenseT = { ...action.payload.expense, id: uuidv4() }
            updateExpenses = [...state.expenses, newExpense]
        }
        return {
            ...state,
            expenses: updateExpenses,
            modal: false,
            editId: '',
        }
    }
    if (action.type === "delete-expense") {
        const newExpenses = state.expenses.filter(e => e.id !== action.payload.id);
        return {
            ...state,
            expenses: newExpenses
        }
    }
    if (action.type === "edit-expense") {
        return {
            ...state,
            modal: true,
            editId: action.payload.id,
        }
    }
    if (action.type === "reset-app") {
        return {
            budget: 0,
            validBudget: false,
            modal: false,
            expenses: [],
            editId: '',
        }
    }
    return state;
}