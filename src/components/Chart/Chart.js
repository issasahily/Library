import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const toArray = props.datapoints.map((e) => e.value);
  console.log(toArray);
  const maxAmount = Math.max(...toArray);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          label={datapoint.label}
          maxValue={maxAmount}
        />
      ))}
    </div>
  );
};
export default Chart;
