import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './expenseForm';
import { addExpense } from '../actions/expenses';

import Typography from '@material-ui/core/Typography';

const AddExpensePage = (props) => (
  <div>
    <Typography variant="title">
      Добавить расход
          </Typography>

    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/')
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
