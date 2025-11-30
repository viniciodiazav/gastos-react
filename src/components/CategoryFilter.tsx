import { useState } from "react";
import { categories } from "../data/data";
import { useBudget } from "../hooks/useBudget";
import ExpenseDetails from "./ExpenseDetails";

export default function CategoryFilter() {

    const [selectedCategory, setSelectedCategory] = useState('');

    const { reducer } = useBudget();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    }

    const expensesCategory = reducer.expenses.filter(e => e.category === selectedCategory);

    return (
        <>
            <div className="bg-white mt-10 max-w-2xl m-auto p-5 rounded-sm shadow">
                <form>
                    <div className="flex justify-evenly">
                        <label htmlFor="categoryFillter" className="text-lg">Categoria:</label>
                        <select name="categoryFillter" id="categoryFillter"
                            className="outline-none bg-gray-200 p-1 rounded-sm w-3/4"
                            value={selectedCategory}
                            onChange={e => handleChange(e)}
                        >
                            <option value="">--Seleccione--</option>
                            {categories.map(c =>
                                <option key={c.id} value={c.id} id={c.id}>{c.name}</option>
                            )}
                        </select>
                    </div>
                </form>
                {selectedCategory !== '' && (
                    expensesCategory.map(e => 
                        <ExpenseDetails 
                            expense={e}
                            key={e.id}
                        />
                    )
                )}
            </div>
        </>
    )
}
