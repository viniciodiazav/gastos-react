import { useBudget } from "../hooks/useBudget"
import ExpenseDetails from "./ExpenseDetails";

export default function ExpenseList() {

    const { reducer } = useBudget();

    return (
        <>
            <div className="bg-white mt-10 max-w-2xl m-auto p-5 rounded-sm shadow">
                {reducer.expenses.length === 0 ?
                    (
                        <p className="text-2xl font-bold ">Todavia no hay gastos</p>
                    ) : (
                        <>
                            <p className="text-2xl font-bold ">Lista de gastos</p>
                            {reducer.expenses.map(e =>
                                <ExpenseDetails
                                    key={e.id}
                                    expense={e}
                                />
                            )}
                        </>
                    )}
            </div>
        </>
    )
}
