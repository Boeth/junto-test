import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./expenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

import Button from "@material-ui/core/Button";

const EditExpensePage = props => (
  <div>
    <ExpenseForm
      expense={props.expense}
      onSubmit={expense => {
        props.dispatch(editExpense(props.expense.id, expense));
        props.history.push("/");
      }}
    />
    <Button
      onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push("/");
      }}
    >
      Удалить
    </Button>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditExpensePage);
