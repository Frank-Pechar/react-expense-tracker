import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2022');

  const saveFilterDataHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    console.log('Saved Filter Data ', filterYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onSaveFilterData={saveFilterDataHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
