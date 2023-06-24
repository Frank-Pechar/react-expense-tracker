import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

// load mock data into State array
const App = () => {
  const INITIAL_EXPENSES = [
    {
      id: 'e1',
      title: 'Coursera Web Development Course',
      amount: 99.99,
      date: new Date(2020, 5, 7),
    },
    {
      id: 'e2',
      title: 'Udemy Courses Discount Prices - Annual',
      amount: 65.0,
      date: new Date(2020, 6, 1),
    },
    {
      id: 'e3',
      title: 'Adobe Creative Cloud Products - Annual ',
      amount: 360.0,
      date: new Date(2020, 6, 1),
    },
    {
      id: 'e4',
      title: 'Udemy Courses Discount Prices - Annual',
      amount: 130.0,
      date: new Date(2021, 6, 1),
    },
    {
      id: 'e5',
      title: 'Adobe Creative Cloud Products - Annual ',
      amount: 720.0,
      date: new Date(2021, 6, 1),
    },
    {
      id: 'e6',
      title: 'New Mobile Phone & Accessories',
      amount: 950.0,
      date: new Date(2022, 2, 15),
    },
    {
      id: 'e7',
      title: 'Tablet Computer Purchase',
      amount: 1500.0,
      date: new Date(2022, 4, 20),
    },
    {
      id: 'e8',
      title: 'Udemy Courses Discount Prices - Annual',
      amount: 110.0,
      date: new Date(2022, 6, 1),
    },
    {
      id: 'e9',
      title: 'Adobe Creative Cloud Products - Annual ',
      amount: 360.0,
      date: new Date(2022, 6, 1),
    },
    {
      id: 'e10',
      title: 'Tablet Keyboard & Pen',
      amount: 220.0,
      date: new Date(2023, 1, 10),
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
