import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      inputValue: "",
      option: "",
      result: 0
    }
  }

  handleInputChange = (event) => {
    let inputValue = this.state.inputValue;
    let option = this.state.option;
    let result = this.state.result;

    this.setState({
      inputValue: event.target.value
    });
  }

  handleSelectChange = (event) => {
    let inputValue = this.state.inputValue;
    let option = this.state.option;
    let result = this.state.result;

    this.setState({
      option: event.target.value,
      result: 0
    });
  }

  handleCalculation = (event) => {
    let inputValue = this.state.inputValue;
    let option = this.state.option;
    let result = this.state.result;
    event.preventDefault();
    this.setState({
      result: 0
    });

    if(option === "sum") {

      this.setState({
        result: 0
      });

      inputValue = inputValue.split(",");
      for(let i = 0; i < inputValue.length; i++) {
        result += parseInt(inputValue[i]);  
      }
      this.setState({
        result: result
      });

    } else if(option === "average") {

        this.setState({
          result: 0
        });

        inputValue = inputValue.split(",");
        for(let i = 0; i < inputValue.length; i++) {
          result += parseInt(inputValue[i]);  
        }
        result /= inputValue.length;
        this.setState({
          result: result
        });

    } else if(option === "mode") {

        this.setState({
          result: 0
        });

        inputValue = inputValue.split(",");
        let count = {};
        let maxCount = 0;

        for(let i = 0; i < inputValue.length; i++) {
          let current = inputValue[i];
          if(!count[current]) {
            count[current] = 0;
          }
          count[current]++;
        }
        for(let num in count) {
          if(count[num] > maxCount) {
            maxCount = num;
          }
        }
        this.setState({
          result: maxCount
        });

      }
  }



  render() {
    const { inputValue, option, result } = this.state;

    return (
      <div className="App">
        <h1>Enter each number in the array, separated by a ","</h1>
        <form onSubmit={this.handleCalculation}>
          <input
            type="text"
            value={inputValue}
            onChange={this.handleInputChange}
          />
          <select onChange={this.handleSelectChange}>
            <option>None</option>
            <option value="sum">Sum</option>
            <option value="average">Average</option>
            <option value="mode">Mode</option>
          </select>
          <button onClick={this.handleCalculation}>Calculate</button>
        </form>
        <p>{result}</p>
      </div>
    );
  }
}

export default App;