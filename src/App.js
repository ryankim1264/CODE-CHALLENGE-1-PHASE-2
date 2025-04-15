import React, { useState } from "react";
import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const initialExpenses = [
    { name: "Rice", type: "Food", amount: 500, date: "2023-10-01" },
    { name: "mafuta", type: "UMHHH", amount: 300, date: "2023-10-02" },
    { name: "Nyama", type: "Subscription", amount: 150, date: "2023-10-03" },
  ];
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpense = (expense) => {
    setExpenses((prevExpense) => {
      return [...prevExpense, expense];
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const type = event.target.type.value;
    const amount = event.target.amount.value;
    const date = event.target.date.value;
    event.target.reset();
    addExpense({ name, type, amount, date });
  };

  const handleDelete = (index) => {
    const updatedExpenses = [...expenses]; 
    updatedExpenses.splice(index, 1);      
    setExpenses(updatedExpenses);          
  };

  return (
    <div>
     
      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="name" placeholder="Expense name" />
        <input type="text" name="type" placeholder="Type" />
        <input type="number" name="amount" placeholder="$$" />
        <input type="date" name="date" placeholder="Date" />
        <button type="submit">Add Expense</button>
      </form>

     
      <table >
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Amount ($)</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <ExpenseItem
              key={index}
              name={expense.name}
              amount={expense.amount}
              type={expense.type}
              date={expense.date}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
