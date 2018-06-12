import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './expenseListItem';
import selectExpenses from '../selectors/expenses';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

const ExpenseList = (props) => (
  <div>
    <Typography variant="title" color="inherit" >
      Список
    </Typography>
    <List>
      {props.expenses.length &&
        props.expenses.map((expenseItem) => (
          <ExpenseListItem key={expenseItem.id} {...expenseItem}
          />
        ))
      }
    </List>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList);
