import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const onHandlleSave = (ExpenseData) => {
    const RecevidData = {
      ...ExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(RecevidData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onHandlleSave} />
    </div>
  );
};

export default NewExpense;
