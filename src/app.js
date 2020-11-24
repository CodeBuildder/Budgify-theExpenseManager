import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

// store.dispatch(addExpense({ description : 'Water Bill.'}));
// store.dispatch(addExpense({ description: 'Cable Bill' }));

// const state = store.getState()

console.log(store.getState())

ReactDOM.render(<AppRouter />, document.getElementById('app'))