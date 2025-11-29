import { categories } from "../data/data";

export default function NewExpenseForm() {
    return (
        <>
            <form className="w-xl space-y-5">
                <legend className="uppercase text-2xl font-bold text-cyan-950 border-b-4 text-center">Nuevo gasto</legend>
                <div className="flex flex-col">
                    <label htmlFor="newExpense" className="text-lg">Nombre Gasto:</label>
                    <input type="text" id="newExpense" name="newExpense"
                        className="outline-none bg-gray-200 p-1 rounded-sm" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="amount" className="text-lg">Cantidad:</label>
                    <input type="number" id="amount" name="amount"
                        className="outline-none bg-gray-200 p-1 rounded-sm" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="category" className="text-lg">Categoria:</label>
                    <select name="category" id="category"
                        className="outline-none bg-gray-200 p-1 rounded-sm"
                    >
                        <option value="0">--Seleccione--</option>
                        {categories.map(c =>
                            <option value={c.id} id={c.id}>{c.name}</option>
                        )}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="date" className="text-lg">Fecha Gasto:</label>
                    <input type="date" id="date" name="date"
                        className="outline-none bg-gray-200 p-1 rounded-sm" 
                        />
                </div>
                <input type="submit" value="Agregar Gasto" 
                    className="w-full bg-cyan-950 uppercase text-white font-bold p-1.5 cursor-pointer rounded-sm hover:bg-cyan-800 transition-all"
                />
            </form>
        </>
    )
}
