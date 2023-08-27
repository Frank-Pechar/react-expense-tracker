import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

// init Expenses State Array to empty
const App = () => {
  const INITIAL_EXPENSES = [];
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  // add new expense to State expenses table
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  // render ui
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
