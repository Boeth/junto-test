import React from 'react';
import moment from 'moment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),    
      error: '',
      currentDate:  moment().format('YYYY-MM-DD'),
    };
  };

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
    }
  };

  onDateChange = (e) => {
    const createdAt = e.target.value
    if (createdAt) {
      this.setState(() => (
        {
          createdAt: createdAt
        }
      ))
    } 
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
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt      
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <h3>{this.state.error}</h3>}
        <form onSubmit={this.onSubmit}>
          <TextField
            id="description"
            label="Описание"
            value={this.state.description}
            autoFocus
            onChange={this.onDescriptionChange}
            margin="normal"
          />
          <TextField
            id="amount"
            label="Сумма"
            value={this.state.amount}
            onChange={this.onAmountChange}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="date"
            label="Дата"
            type="date" 
            defaultValue={this.state.currentDate}                 
            onChange={this.onDateChange}          
            InputLabelProps={{
              shrink: true,
            }}
          />

          <Button type="submit" color="inherit">Сохранить</Button>
          
        </form>
      </div>
    )
  }
}
