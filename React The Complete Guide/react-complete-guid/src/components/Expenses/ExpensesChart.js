import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: 'Oca', value: 0 },
    { label: 'Şub', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Nis', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Haz', value: 0 },
    { label: 'Tem', value: 0 },
    { label: 'Ağu', value: 0 },
    { label: 'Eyl', value: 0 },
    { label: 'Eki', value: 0 },
    { label: 'Kas', value: 0 },
    { label: 'Ara', value: 0 }
  ];

  props.items.forEach(expense => {
    const dataPoint = chartDataPoints[expense.date.getMonth()];
    dataPoint.value += expense.amount;
  });

  return (
    <div>
      <Chart dataPoints={chartDataPoints}/>
    </div>
  );
};

export default ExpensesChart;
