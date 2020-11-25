import React from 'react'

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: ''
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }
    render() {
        return(
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Desciption"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="number"
                        placeholder="Enter the Amount"
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