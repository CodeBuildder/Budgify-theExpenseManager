import { createStore, combineReducers} from 'redux';
import { v4 as uuid4 } from 'uuid'

const addExpense = (
    {
        description = '', 
        type = '', 
        note = '', 
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid4(),
        description,
        note,
        type,
        amount,
        createdAt
    }
})

const removeExpense = ({ id } = {}
) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = ( id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const setTextFilter = ( text = '') => ({
    type: 'SET_TEXT_FILTER',
    text

})

const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch(action.type) {
        case 'ADD_EXPENSE':
        return [
            ...state,
            action.expense
        ];
        case 'REMOVE_EXPENSE':
        return state.filter(({ id }) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense
                }
            })
        default:
            return state
    }
}

const filtersReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}

const filterReducer = (state = filtersReducerDefaultState, action) => {

    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return{
                ...state,
                text:action.text
            }
        default:
            return state
    }
}


const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filterReducer

    })
)

store.subscribe(() => {
    console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 4000}))
const expenseTwo = store.dispatch(addExpense({ description: 'Condom', amount: 9900}))

store.dispatch(removeExpense({ id: expenseOne.expense.id }))
store.dispatch(editExpense( expenseTwo.expense.id, { description: 'Juice' }))

store.dispatch(setTextFilter('rent'))


const demoState = {
    expenses: [{
        id: 'sachisachi',
        type: 'Cash',
        description: 'Rent',
        note: 'hahaha',
        amount: 50000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}