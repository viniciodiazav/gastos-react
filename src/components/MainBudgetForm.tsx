import { formatCurrency } from "../helpers";
import { useBudget } from "../hooks/useBudget";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function MainBudgetForm() {

    const { dispatch, reducer } = useBudget();

    const percentage = +(((reducer.totalExpended * 100) / reducer.budget).toFixed(2));

    return (
        <div className="max-w-2xl m-auto">
            <div className="bg-white grid grid-cols-1 md:grid-cols-2 p-5 rounded-sm shadow">
                <div className="flex justify-center items-center font-bold">
                    <CircularProgressbar 
                        value={percentage}
                        styles={buildStyles({
                            pathColor: percentage >= 100 ? '#e7000b' : '#053345',
                            trailColor: '#e2e8f0',
                            textSize: 8,
                            textColor: percentage >= 100 ? '#e7000b' : 'black',
                        })}
                        text={`${percentage}% gastado`}
                    />
                </div>
                <div className="p-3 space-y-5 text-center flex justify-center items-center flex-col">
                    <button className="bg-cyan-900 w-full text-white uppercase text-lg font-bold p-1 rounded-sm cursor-pointer"
                        onClick={() => dispatch({ type: "reset-app" })}
                    >Resetear app</button>

                    <div>
                        <p className="text-xl font-bold text-cyan-800">Presupuesto: <span className="text-black">{formatCurrency(reducer.budget)}</span></p>
                    </div>

                    <div>
                        <p className="text-xl font-bold text-cyan-800">Disponible: <span className="text-black">{reducer.availableBudget < 0 ? formatCurrency(0) : formatCurrency(reducer.availableBudget)}</span></p>
                        {reducer.availableBudget < 0 && <p className="text-sm text-red-600 font-black">{formatCurrency(reducer.availableBudget)}</p>}
                    </div>

                    <div>
                        <p className={`text-xl font-bold ${reducer.availableBudget < 0 ? 'text-red-600' : 'text-cyan-800'}`}>Gastado: <span className={`${reducer.availableBudget < 0 ? 'text-red-600' : 'text-black'}`}>{formatCurrency(reducer.totalExpended)}</span></p>
                    </div>

                </div>
            </div>
        </div>
    )
}
