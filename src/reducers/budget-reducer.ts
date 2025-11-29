export type BudgetActions =
    { type: 'add-budget', pyload: { budget: number } } |
    { type: 'valid-budget' }

export type BudgetStateT = {
    budget: number;
    validBudget: boolean;
}

export const initialbudgetState: BudgetStateT = {
    budget: 0,
    validBudget: false,
}

export const budgetReducer = (state: BudgetStateT = initialbudgetState, action: BudgetActions) => {
    if (action.type === 'add-budget') {
        return {
            ...state,
            budget: action.pyload.budget
        }
    }
    if (action.type === 'valid-budget') {
        return {
            ...state,
            validBudget: true
        }
    }
    return state;
}