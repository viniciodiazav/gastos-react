import type { ExpenseT, initialExpenseT } from "../types";
import { v4 as uuidv4 } from 'uuid'

export type BudgetActions =
    { type: 'add-budget', payload: { budget: number } } |
    { type: 'valid-budget' } |
    { type: 'open-modal' } |
    { type: 'close-modal' } |
    { type: 'add-expense', payload: { expense: initialExpenseT } }

export type BudgetStateT = {
    budget: number;
    validBudget: boolean;
    modal: boolean;
    expenses: ExpenseT[];
}

export const initialbudgetState: BudgetStateT = {
    budget: 0,
    validBudget: false,
    modal: false,
    expenses: [],
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
            modal: false
        }
    }
    if (action.type === "add-expense") {
        const newExpense: ExpenseT = { ...action.payload.expense, id: uuidv4() }
        return {
            ...state,
            expenses: [...state.expenses, newExpense],
            modal: false,
        }
    }
    return state;
}