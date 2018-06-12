import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './expenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>Список</h1>
    {props.expenses.length &&
      props.expenses.map((expenseItem) => (
        <ExpenseListItem key={expenseItem.id} {...expenseItem}
        />
      ))
    }
  </div>
);

const mapStateToProps = (state) => { 
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList);
