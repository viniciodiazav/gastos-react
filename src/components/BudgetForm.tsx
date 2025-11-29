import { useBudget } from "../hooks/useBudget";

export default function BudgetForm() {

    const { reducer, dispatch } = useBudget();

    const handleInputBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (+e.target.value <= 0) {
            e.target.classList.add('ring-2', 'ring-red-600');
            setTimeout(() => {
                e.target.classList.remove('ring-2', 'ring-red-600');
            }, 2000);
        }
    }

    const isValidBudget = () => {
        return reducer.budget <= 0;
    }

    return (
        <>
            <form className="bg-white p-4 grid grid-cols-1 space-y-3 rounded-sm shadow max-w-3xl m-auto"
                onSubmit={e => {
                    e.preventDefault();
                    dispatch({ type: "valid-budget" });
                }}
            >
                <label htmlFor="budget"
                    className="text-center text-cyan-950 font-bold text-2xl border-b-4 pb-2"
                >Presupuesto</label>
                <input type="number" id="budget"
                    className="bg-gray-100 outline-none p-2 rounded-sm transition-all"
                    onBlur={handleInputBlur}
                    value={reducer.budget === 0 ? '' : reducer.budget}
                    onChange={(e) => dispatch({ type: "add-budget", pyload: { budget: +e.target.value } })}
                />
                <input type="submit" value="Guardar presupuesto"
                    className="uppercase bg-cyan-950 text-white font-bold text-lg p-2 rounded-sm disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                    disabled={isValidBudget()}
                />
            </form>
        </>
    )
}
