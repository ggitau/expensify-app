import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
constructor(props){
  super(props);
  this.state = {
    description: props.expense ? props.expense.description:'',
    note: props.expense?props.expense.note:'',
    amount:props.expense?(props.expense.amount/100).toString():'',
    createdAt: props.expense?moment(props.expense.createdAt):moment(),
    calendarFocused: false,
    error: ''
  };
}

  onDescriptionChange = (e) => {
    const description=e.target.value;
    this.setState(()=>({ description }));
  };

  onNoteChange = (e) => {
    const note=e.target.value;
    this.setState(()=>({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
      this.setState(()=>({amount}));
    }
  };

  onCreatedAtChange = (createdAt) => {
    if (createdAt) {
        this.setState(()=>({ createdAt }));
    }
  };

  onFocusChange = ({focused}) => {
    this.setState(()=>({calendarFocused:focused}));
  };

  onSubmit = (e) => {
    e.preventDefault();
    let error = '';
    if (!this.state.description || !this.state.amount) {
      error='Please provide description and amount';
    }else{
      error='';
      this.props.onSubmit({
        description:this.state.description,
        amount:parseFloat(this.state.amount,10)*100,
        createdAt:this.state.createdAt.valueOf(),
        note:this.state.note
      })
    }
    this.setState(()=>({error}));

  };

  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}/>
            <input
              type="text"
              value={this.state.amount}
              onChange={this.onAmountChange}
              placeholder="Amount"/>
              <SingleDatePicker
                date={this.state.createdAt}
                onDateChange={this.onCreatedAtChange}
                focused={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={(day) => false }/>
              <textarea
                onChange={this.onNoteChange}
                value={this.state.note}
                placeholder="Add a note for your expense(Optional)">
              </textarea>
              <button>Add Expense</button>
            </form>
          </div>
        );
    }
}
