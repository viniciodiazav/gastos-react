import { categories } from "../data/data";
import { formatCurrency, formatDate } from "../helpers";
import { useBudget } from "../hooks/useBudget";
import type { ExpenseT } from "../types"
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

type ExpenseDetailsProps = {
    expense: ExpenseT;
}

export default function ExpenseDetails({ expense }: ExpenseDetailsProps) {

    const category = categories.filter(c => c.id === expense.category)[0];

    const { dispatch } = useBudget();

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction
                onClick={() => {
                    dispatch({ type: "edit-expense", payload: { id: expense.id } });
                }}
            >
                Actualizar
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                onClick={() => { dispatch({ type: "delete-expense", payload: { id: expense.id } }) }}
                destructive={true}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <>
            <SwipeableList>
                <SwipeableListItem
                    maxSwipe={30}
                    leadingActions={leadingActions()}
                    trailingActions={trailingActions()}
                >
                    <div className="flex justify-center items-center p-5 gap-3 border-b-2 min-w-full border-gray-400 select-none">
                        <div className="w-20">
                            <img src={`/icono_${category.icon}.svg`} alt="" />
                        </div>
                        <div className="min-w-1/2 space-y-1 pl-10">
                            <p className="text-gray-500">{category.name}</p>
                            <p className="font-bold">{expense.name}</p>
                            <p className="text-sm">{formatDate(expense.date)}</p>
                        </div>
                        <div className="min-w-1/4">
                            <p className="text-2xl font-black">{formatCurrency(expense.amount)}</p>
                        </div>
                    </div>
                </SwipeableListItem>
            </SwipeableList>
        </>
    )
}
