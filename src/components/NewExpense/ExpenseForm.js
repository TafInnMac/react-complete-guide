import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
	const [enteredTitle, setTitle] = useState('');
	const [enteredAmount, setAmount] = useState('');
	const [enteredDate, setDate] = useState('');

	const changeTitleHandler = (event) => {
		setTitle(event.target.value);
	}

	const changeAmountHandler = (event) => {
		setAmount(event.target.value);
	}

	const changeDateHandler = (event) => {
		setDate(event.target.value);
	}

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate)
		}

		props.onSaveExpenseData(expenseData);
		setTitle('');
		setAmount('');
		setDate('');
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={enteredTitle} onChange={changeTitleHandler} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={changeAmountHandler} />
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type="date" min="2019-01-01" max="2024-12-31" value={enteredDate} onChange={changeDateHandler} />
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={props.onCancel}>Cancel</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;