import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import {sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused: calendarFocused }));
  };
  render() {
    return (
      <div>   
        
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === "date")
              this.props.dispatch(sortByDate());
            else if (e.target.value === "amount")
              this.props.dispatch(sortByAmount());
          }}
        >
          <option value="date">По дате</option>
          <option value="amount">По сумме</option>
        </select>
          <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
           <div className="content-container">
                <h2 className="page-header__title">Всего записей <span>{this.props.expenseCount}</span> | Расходы: <span>{this.props.expensesTotal}</span></h2>                
            </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    filters: state.filters,
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
