import { formatCurrency } from "../helpers";
import { useBudget } from "../hooks/useBudget";

export default function MainBudgetForm() {

    const { dispatch, reducer } = useBudget();

    return (
        <div className="max-w-2xl m-auto">
            <div className="bg-white grid grid-cols-1 md:grid-cols-2 p-5 rounded-sm shadow">
                <div className="flex justify-center items-center font-bold">Grafico</div>
                <div className="p-3 space-y-5 text-center">
                    <button className="bg-cyan-900 w-full text-white uppercase text-lg font-bold p-1 rounded-sm cursor-pointer"
                        onClick={() => dispatch({type: "reset-app"})}
                    >Resetear app</button>

                    <p className="text-xl font-bold text-cyan-800">Presupuesto: <span className="text-black">{formatCurrency(reducer.budget)}</span></p>

                    <p className="text-xl font-bold text-cyan-800">Disponible: <span className="text-black">{formatCurrency(reducer.availableBudget)}</span></p>

                    <p className="text-xl font-bold text-cyan-800">Gastado: <span className="text-black">{formatCurrency(reducer.totalExpended)}</span></p>

                </div>
            </div>
        </div>
    )
}
