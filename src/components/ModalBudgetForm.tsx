import { PlusIcon } from '@heroicons/react/24/solid'
import { useBudget } from '../hooks/useBudget'

export default function ModalBudgetForm() {

    const {reducer, dispatch} = useBudget();

    return (
        <>
            <div className={`fixed inset-0 bg-black/75 ${reducer.modal ? 'flex' : 'hidden'} items-center justify-center z-10`}
                onClick={() => dispatch({type: 'close-modal'})}
            >
                <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg relative">

                </div>
            </div>

            <button className="fixed bottom-8 right-8 bg-cyan-950 w-14 h-14 flex justify-center items-center rounded-full"
                onClick={() => dispatch({type: 'open-modal'})}
            >
                <PlusIcon
                    className='text-white w-10'
                />
            </button>
        </>
    )
}
