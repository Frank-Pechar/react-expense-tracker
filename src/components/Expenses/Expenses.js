import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2023');

  const saveFilterDataHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  // filtering expenses array by selected year
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  // render entire expense area to display

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
