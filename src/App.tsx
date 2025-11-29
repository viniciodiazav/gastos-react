import BudgetForm from "./components/BudgetForm";
import ExpenseList from "./components/ExpenseList";
import MainBudgetForm from "./components/MainBudgetForm";
import ModalBudgetForm from "./components/ModalBudgetForm";
import { useBudget } from "./hooks/useBudget";

export default function App() {

  const { reducer } = useBudget();

  return (
    <>
      <header>
        <div>
          <h1 className="bg-cyan-950 p-6 text-center text-white text-4xl font-bold uppercase">Control de gastos</h1>
        </div>
      </header>

      <section className="my-10">
        {reducer.validBudget ? (
          <>
            <MainBudgetForm />
            <ExpenseList />
          </>
        ) : (<BudgetForm />)}
      </section>

      {reducer.validBudget && <ModalBudgetForm />}
    </>
  )
}
