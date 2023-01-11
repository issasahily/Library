import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  const Month = props.date.toLocaleString("en-US", { month: "long" });
  const Day = props.date.toLocaleString("en-US", { month: "2-digit" });
  const Years = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month"> {Month}</div>
      <div className="expense-date__day">{Day}</div>
      <div className="expense-date__year">{Years}</div>
    </div>
  );
};

export default ExpenseDate;
