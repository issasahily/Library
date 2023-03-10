import { useState } from "react";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
//function App(){   we can start the function here!

const Dummy_Expense = [
  {
    id: "e1",
    title: "React full tutorial Book",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Flutter guide",
    amount: 350,
    date: new Date(2022, 4, 19),
  },
  {
    id: "e6",
    title: "Laravel Full tutorial",
    amount: 450,
    date: new Date(2020, 7, 1),
  },
];
function App() {
  const [expenses, setExpenses] = useState(Dummy_Expense);
  const onAddExpenseHandller = (expense) => {
    //setExpenses([...expenses, expense]);
    setExpenses((prev_expense) => {
      return [...prev_expense, expense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandller} />
      <Expense items={expenses} />
    </div>
  );
}
export default App;
