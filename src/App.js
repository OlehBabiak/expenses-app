import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";



function App() {
    const initionalExpensesState  = []
    const [expenseArray, setExpenseArray] = useState(initionalExpensesState);

    const selectYearHandler = (year) =>{
        return year
    }

    const addExpenseHandler = (expense) =>{
        setExpenseArray(prevExpense => {
           return [expense, ...prevExpense]
        }) // додаєм витрату до обєкту
    };

    return (
      <div>
          <NewExpense onAddExpense = {addExpenseHandler}/>
          <Expenses items={expenseArray} selectYearHandler={selectYearHandler}/>
      </div>
  );
}

export default App;
