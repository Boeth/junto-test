import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import { sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

class ExpenseListFilters extends React.Component {
  state = {
    startDate: this.props.filters.startDate.format('YYYY-MM-DD'),
    endDate: this.props.filters.endDate.format('YYYY-MM-DD'),
  };

  onFilterChange = (e) => {
    if (e.target.value === "date")
      this.props.dispatch(sortByDate());
    else if (e.target.value === "amount")
      this.props.dispatch(sortByAmount());
  };

  onStartDateChange = (e) => {
    const startDate = e.target.value
    if (startDate) {
      this.setState(() => (
        {
          startDate: startDate
        }
      ))
      this.onDatesChange(moment(startDate, 'DD-MM-YYYY'), moment(this.state.endDate, 'DD-MM-YYYY'))
    }
  };

  onEndDateChange = (e) => {
    const endDate = e.target.value
    if (endDate) {
      this.setState(() => (
        {
          endDate: endDate
        }
      ))
      this.onDatesChange(moment(this.state.startDate, 'DD-MM-YYYY'), moment(endDate, 'DD-MM-YYYY'))
    }
  };

  onDatesChange = (startDate, endDate) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  render() {
    return (
      <div className="Filter">

        <FormControl >
          <InputLabel htmlFor="filter">Фильтр</InputLabel>
          <Select
            native
            value={this.props.filters.sortBy}
            onChange={this.onFilterChange}
            input={<Input name="filter" id="filter" />}
          >
            <option value={"date"}>По дате</option>
            <option value={"amount"}>По сумме</option>
          </Select>
        </FormControl>

        <TextField
          id="startDate"
          label="Начало периода"
          type="date"
          defaultValue={this.state.startDate}
          onChange={this.onStartDateChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="endDate"
          label="Конец периода"
          type="date"
          defaultValue={this.state.endDate}
          onChange={this.onEndDateChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div className="Total">
          <Typography variant="title" color="inherit" >
            Всего записей <span>{this.props.expenseCount}</span> | Расходы: <span>{numeral(this.props.expensesTotal / 100).format('0,0.00')}</span>
          </Typography>
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
