import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',     
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => (
      {
        description: description,
      }
    ));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => (
        {
        amount: amount
        }
      ))
    };
  };

  onDateChange = (createdAt) => {  
    if (createdAt) {
      this.setState(() => (
        {
          createdAt: createdAt
        }
      ))
    };
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => (
      {
        calendarFocused: focused
      }
    ));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => (
        {
          error: 'Заполните описание и расходы'
        }
      ));
    } else {  
      this.setState(() => (
        {
          error: ''
        }
      ));
      this.props.onSubmit({
        description: this.state.description,
        amount: this.state.amount, 
        createdAt: this.state.createdAt.valueOf(), 
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <h3>{this.state.error}</h3>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Описание"
            value={this.state.description}
            autoFocus
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Сумма"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />         
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          /> 
          <button>Добавить расход</button>
        </form>
      </div>
    )
  }
}
