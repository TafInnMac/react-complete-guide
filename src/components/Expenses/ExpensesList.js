import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

const ExpensesList = props => {
	let expenseItems = props.items.map(expense => {
		return <ExpenseItem
			key={expense.id}
			title={expense.title}
			amount={expense.amount}
			date={expense.date}
		/>
	});

	return (
		<ul className="expenses-list">
			{expenseItems.length === 0 ? (<h2 className="expenses-list__fallback">No expenses found.</h2>) : expenseItems}
		</ul>
	);
};

export default ExpensesList;