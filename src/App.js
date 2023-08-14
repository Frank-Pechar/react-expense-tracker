import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

// load mock data into State array
const App = () => {
  const INITIAL_EXPENSES = [
    {
      id: 'e1',
      title: 'Coursera Web Development Course',
      amount: 110.0,
      date: new Date(2020, 1, 7),
    },
    {
      id: 'e2',
      title: 'Adobe Creative Cloud Products - Annual ',
      amount: 360.0,
      date: new Date(2020, 4, 1),
    },
    {
      id: 'e3',
      title: 'Three Udemy Courses - 90% Off Discount - Annual',
      amount: 75.0,
      date: new Date(2020, 8, 1),
    },
    {
      id: 'e4',
      title: 'Adobe Creative Cloud Products - Annual ',
      amount: 720.0,
      date: new Date(2021, 4, 1),
    },
    {
      id: 'e5',
      title: 'Six Udemy Courses - 90% Off Discount - Annual',
      amount: 145.0,
      date: new Date(2021, 9, 1),
    },
    {
      id: 'e6',
      title: 'New Mobile Phone & Accessories',
      amount: 950.0,
      date: new Date(2022, 1, 15),
    },
    {
      id: 'e7',
      title: 'Tablet Computer Purchase',
      amount: 1500.0,
      date: new Date(2022, 2, 20),
    },
    {
      id: 'e8',
      title: 'Adobe Creative Cloud Products - Annual ',
      amount: 360.0,
      date: new Date(2022, 4, 1),
    },
    {
      id: 'e9',
      title: 'Five Udemy Courses - 90% Off Discount - Annual',
      amount: 125.0,
      date: new Date(2022, 6, 1),
    },
    {
      id: 'e10',
      title: 'Tablet Keyboard & Stylus',
      amount: 220.0,
      date: new Date(2023, 1, 10),
    },
    {
      id: 'e11',
      title: 'Two Udemy Courses - 90% Off Discount - Annual',
      amount: 45.0,
      date: new Date(2023, 3, 15),
    },
    {
      id: 'e12',
      title: 'Adobe Creative Cloud Products - Annual ',
      amount: 360.0,
      date: new Date(2023, 4, 1),
    },
  ];

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
