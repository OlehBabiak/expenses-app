import './ExpenseForm.css'
import {useState} from "react";

function ExpenseForm(props) {
    const [userInpun, setUserInpuT] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });


    function titleChangeHandler(event) {
        let value = event.target.value
        setUserInpuT((userInpun)=> {
            return  {...userInpun, enteredTitle: value}
        });
    }
    function amountChangeHandler(event) {
        let value = event.target.value
        setUserInpuT((userInpun)=> {
           return  {...userInpun, enteredAmount: value}
        });
    }
    function dateChangeHandler(event) {
        let value = event.target.value
        setUserInpuT((userInpun)=> {
            return  {...userInpun, enteredDate: value}//userInpun - об'єкт, перевизначаємо ключ на значення інпуиту
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {  //обєкт
            title: userInpun.enteredTitle,
            amount: +userInpun.enteredAmount,
            date: new Date(userInpun.enteredDate)
        }

        props.onSaveExpenseData(expenseData) // передаєм expenseData параметром в ф-цію батьківської компоненти

        setUserInpuT({ // очищаємо інпут
                enteredTitle: '',
                enteredAmount: '',
                enteredDate: ''
            }
        );

    };



    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={userInpun.enteredTitle}
                        onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={userInpun.enteredAmount}
                        onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2021-07-01'
                        step='2025-12-01'
                        value={userInpun.enteredDate}
                        onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm
        