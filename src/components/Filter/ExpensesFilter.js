import React from 'react';

import './ExpenseFilter.css'

const ExpensesFilter = (props) => {

const selectYearChangeHandler = (e) => {
    let year = e.target.value
    props.onCangeYear(year)
}
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={selectYearChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='All'>All</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;