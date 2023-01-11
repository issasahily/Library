import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [entredTitle, setEntredtitle] = useState("");
  const [entredAmount, setEntredAmount] = useState("");
  const [entredDate, setEntredDate] = useState("");
  const TitleClickHanddle = (event) => {
    setEntredtitle(event.target.value);
  };
  const AmountClickHanddle = (event) => {
    setEntredAmount(event.target.value);
  };
  const DateClickHanddle = (event) => {
    setEntredDate(event.target.value);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const expensedata = {
      title: entredTitle,
      amount: +entredAmount,
      date: new Date(entredDate), //date: entredDate,
    };
    props.onSaveExpenseData(expensedata);
    //console.log(expensedata);
    setEntredtitle("");
    setEntredAmount("");
    setEntredDate("");
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={entredTitle} onChange={TitleClickHanddle} />
        </div>
        <div className="expense-form__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={entredAmount}
            onChange={AmountClickHanddle}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={entredDate}
            onChange={DateClickHanddle}
          />
          <div className="new-expense__actions">
            <button type="submit">Add Your Book</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
