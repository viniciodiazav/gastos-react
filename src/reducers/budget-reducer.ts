export type BudgetActions =
    { type: 'add-budget', pyload: { budget: number } } |
    { type: 'valid-budget' } |
    { type: 'open-modal' } |
    { type: 'close-modal' } 

export type BudgetStateT = {
    budget: number;
    validBudget: boolean;
    modal: boolean;
}

export const initialbudgetState: BudgetStateT = {
    budget: 0,
    validBudget: false,
    modal: false,
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
    return state;
}