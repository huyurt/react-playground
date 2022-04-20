import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);

    props.onAddexpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseHandler={saveExpenseDataHandler}/>
    </div>
  );
}

export default NewExpense;
