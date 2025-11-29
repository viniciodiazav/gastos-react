import { PlusIcon } from '@heroicons/react/24/solid'
import { useBudget } from '../hooks/useBudget'
import NewExpenseForm from './NewExpenseForm';

export default function ModalBudgetForm() {

    const { reducer, dispatch } = useBudget();

    return (
        <>
            <div className={`fixed inset-0 bg-black/75 flex items-center justify-center z-10 transition-opacity duration-300 ease-in-out ${reducer.modal ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => dispatch({ type: 'close-modal' })}
            >
                <div className={`bg-white p-8 rounded-lg shadow-lg  relative transform transition-all duration-300 ease-in-out ${reducer.modal ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <NewExpenseForm />
                </div>
            </div>

            <button className="fixed bottom-8 right-8 bg-cyan-950 w-14 h-14 flex justify-center items-center rounded-full shadow-lg hover:bg-cyan-900 transition-colors cursor-pointer"
                onClick={() => dispatch({ type: 'open-modal' })}
            >
                <PlusIcon
                    className='text-white w-10'
                />
            </button>
        </>
    )
}