import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const max = Math.max(...props.dataPoints.map(dataPoint => dataPoint.value));

  return (
    <div className="chart">
      {
        props.dataPoints.map(dataPoint => {
          return <ChartBar
            key={dataPoint.label}
            label={dataPoint.label}
            value={dataPoint.value}
            max={max}
          />
        })
      }
    </div>
  );
}

export default Chart;
