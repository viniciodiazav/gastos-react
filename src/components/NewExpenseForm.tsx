import React, { useState } from "react";
import { categories } from "../data/data";
import type { initialExpenseT } from "../types";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";

export default function NewExpenseForm() {

    const initialExpense = {
        amount: 0,
        category: '',
        date: '',
        name: ''
    }

    const [expense, setExpense] = useState<initialExpenseT>(initialExpense);

    const [error, setError] = useState('');

    const { dispatch } = useBudget();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const updateExpense = {
            ...expense,
            [e.target.id]: e.target.id === 'amount' ? +e.target.value : e.target.value,
        }
        setExpense(updateExpense);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.values(expense).includes('') || Object.values(expense).includes(0)) {
            setError('Todos los campos son obligatorios');
            setTimeout(() => {
                setError('');
            }, 3000)
        } else {
            dispatch({ type: "add-expense", payload: { expense: expense } });
            setExpense(initialExpense);
        }
    }

    return (
        <>
            <form className="w-xl space-y-5" onSubmit={handleSubmit}>
                <legend className="uppercase text-2xl font-bold text-cyan-950 border-b-4 text-center">Nuevo gasto</legend>
                {error !== '' ? (<ErrorMessage>{error}</ErrorMessage>) : (<></>)}
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-lg">Nombre Gasto:</label>
                    <input type="text" id="name" name="name"
                        className="outline-none bg-gray-200 p-1 rounded-sm"
                        value={expense.name}
                        placeholder="Ingrese el nombre de un gasto"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="amount" className="text-lg">Cantidad:</label>
                    <input type="number" id="amount" name="amount"
                        className="outline-none bg-gray-200 p-1 rounded-sm"
                        value={expense.amount === 0 ? '' : expense.amount}
                        placeholder="Ingrese una cantidad"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="category" className="text-lg">Categoria:</label>
                    <select name="category" id="category"
                        className="outline-none bg-gray-200 p-1 rounded-sm"
                        value={expense.category}
                        onChange={handleChange}
                    >
                        <option value="0">--Seleccione--</option>
                        {categories.map(c =>
                            <option key={c.id} value={c.id} id={c.id}>{c.name}</option>
                        )}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="date" className="text-lg">Fecha Gasto:</label>
                    <input type="date" id="date" name="date"
                        className="outline-none bg-gray-200 p-1 rounded-sm"
                        value={expense.date}
                        onChange={handleChange}
                    />
                </div>
                <input type="submit" value="Agregar Gasto"
                    className=" w-full bg-cyan-950 uppercase text-white font-bold p-1.5 cursor-pointer rounded-sm hover:bg-cyan-800 transition-all"
                />
            </form>
        </>
    )
}
