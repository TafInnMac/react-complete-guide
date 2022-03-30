import { useState } from 'react';
// import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';

import './Expenses.css';

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	}

	const filteredExpenses = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	// let expenseItems = filteredExpenses.map(expense => {
	// 	return <ExpenseItem
	// 		key={expense.id}
	// 		title={expense.title}
	// 		amount={expense.amount}
	// 		date={expense.date}
	// 	/>
	// });

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter default={filteredYear} onFilterChange={filterChangeHandler} />
				{/* {expenseItems.length === 0 ? (<p>No expenses found.</p>) : expenseItems} */}
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
}

export default Expenses;
