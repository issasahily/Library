import "../components/ExpenseList.css";
import ExpenseItem from "./Expense/ExpenseItem";
const ExpenseList = (props) => {
  if (props.size.length === 0) {
    return <h2 className="expenses-list__fallback "> Expense not found</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.size.map((e) => (
        <ExpenseItem
          title={e.title}
          amount={e.amount}
          date={e.date}
          key={e.id}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
