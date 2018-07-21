import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {

constructor(){
  super();
  this.state = {
    result: 0,
    number1: 10,
    number2: 7,
    operation: "+"
  };

  this.showresult = this.showresult.bind(this);
}

showresult(){
  let result = 0;
  switch (this.state.operation){
    case "+":
      result = this.state.number1 + this.state.number2;
      break;
    case"-":
      result = this.state.number1 - this.state.number2;
      break;
      default:
      break;

  }
  this.setState({result: result});
//  this.state.result = this.state.number1 + this.state.number2;
}

handleNumber1Change(e){
  this.setState({number1: +e.currentTarget.value})
}

handleNumber2Change(e){
  this.setState({number2: Number(e.currentTarget.value)})

}

handleOperationChange(e){
  this.setState({operation: e.currentTarget.value})

}


  render() {
    return (
      <div className="calculator">
      <input value={this.state.number1} onChange={this.handleNumber1Change.bind(this)}/>
      <select name="" id="" onChange={this.handleOperationChange.bind(this)}>
      <option value="+">+</option>
      <option value="-">-</option>
      </select>
      <input value={this.state.number2} onChange={this.handleNumber2Change.bind(this)}/>
      <button onClick={this.showresult}>Get result</button>
      <div>
        Result: <span>{this.state.number1}
        {this.state.operation}
        {this.state.number2} = {this.state.result}
        </span>
      </div>
      </div>
    );
  }
}


export default Calculator;
