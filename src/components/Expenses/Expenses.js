import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "../Filter/ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
const [selectedYear, setSelectedYear] = useState('2021');

const selectYearChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear)
    props.selectYearHandler(selectedYear)
}
    const filteredExpenses = props.items.filter(expense=> {
        return expense.date.getFullYear().toString() === selectedYear
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    onCangeYear={selectYearChangeHandler}
                    selected={selectedYear}
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses