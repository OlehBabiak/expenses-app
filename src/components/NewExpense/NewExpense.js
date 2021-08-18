import './NewExpence.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";


function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);
    
    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseDada = {
            ...enteredExpenseData,  // розкриваємо переданий обєкт
            id: (Math.random()).toString()
        }
        props.onAddExpense(expenseDada)
        setIsEditing(false)
    }
    function startEditingHandler() {
        setIsEditing(true)
    }

    function stopEditingHandler() {
        setIsEditing(false)
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    );
}

export default NewExpense
