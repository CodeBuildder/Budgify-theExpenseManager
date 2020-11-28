import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

//const date = new Date()

const now = moment()
console.log(now.format('Do MMM, YYYY'))

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100 ).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }  
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }
    onAmountChange =(e) => {
        const amount = e.target.value
        if(!amount || amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        } 
    }
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({ createdAt }))
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }
    onSubmit = (e) => {
        e.preventDefault()

        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Description and amount cannot be empty.' }))
        }else{
            this.setState(() => ({ error: 'Successfully Added!' }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                //type: this.state.type.value,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render() {
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Desciption"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="text"
                        placeholder="Enter the Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date = {this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        displayFormat={() => "DD/MM/YYYY"}
                    />
                    <select>
                        <option>
                        Card
                        </option>
                        <option>
                        Cash
                        </option>
                    </select>
                    <textarea
                        placeholder="Add note for reference."
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense </button>
                </form>
            </div>
        )
    }
}