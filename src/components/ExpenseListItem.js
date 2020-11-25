import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'

const expenseListItem = ({ dispatch, id, description, type, amount, createdAt }) => (
    <div>
        <h3>{description}</h3>
        <p>{type}</p>
        <p>{amount} - {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({ id }))
        }}>Remove</button>
    </div>
)

export default connect()(expenseListItem)