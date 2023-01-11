import Card from "../UI/Card";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "../ExpenseList";
import ExpenseChart from "./ExpenseChart";
function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [filter_array, setFilter_array] = useState(props.items);
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    setFilter_array(
      props.items.filter((e) => {
        return e.date.getFullYear().toString() === selectedYear;
      })
    );
  };
  return (
    <Card className="expense">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filter_array} />
      <ExpenseList size={filter_array} />
    </Card>
  );
}
export default Expense;
