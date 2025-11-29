import { createContext, useReducer, type ReactNode } from "react"
import { budgetReducer, initialbudgetState, type BudgetActions, type BudgetStateT } from "../reducers/budget-reducer";

type BudgetContextProps = {
    reducer: BudgetStateT;
    dispatch: React.ActionDispatch<[action: BudgetActions]>;
}

type BudgetProviderProps = {
    children: ReactNode;
}

export const BudgetContext = createContext({} as BudgetContextProps);

export const BudgetProvider = ({ children }: BudgetProviderProps) => {

    const [reducer, dispatch] = useReducer(budgetReducer, initialbudgetState);

    return (
        <BudgetContext.Provider
            value={{
                dispatch,
                reducer
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}