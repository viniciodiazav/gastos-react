import { PlusIcon } from '@heroicons/react/24/solid'

export default function ModalBudgetForm() {
    return (
        <>
            <button className="fixed bottom-8 right-8 bg-cyan-950 w-14 h-14 flex justify-center items-center rounded-full">
                <PlusIcon 
                    className='text-white w-10'
                />
            </button>
        </>
    )
}
