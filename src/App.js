import React, {Component} from 'react';
import './App.css';
import Button from './Components/Button/Button';
import ResultTest from './Components/TextBox/ResultText';


class App extends Component {
  state = {
    result : 0
  }

  addValueToResultTextHandler = (event) => {
    this.setState({
      result : this.state.result === 0 ? event.target.value : this.state.result + event.target.value,
    });
  }

  clearResultTextHandler = () => {
    this.setState({
      result : 0
    });
  }

  calSquareHandler = () => {
    this.setState({
      result : this.state.result ** 2
    });
  }

  calResultHandler = () => {
    this.setState({
      result : (0,eval)(this.state.result)
    });
  }

  calPercentageHandler= () => {
    this.setState({
      result : this.state.result / 100
    });
  }

  // negationHandler = () => {
  //   this.setState({
  //     result : 
  //   })
  // }

  render(){
    return(
      <div className="App">
        <ResultTest value = {this.state.result}/>
        <Button value = "%" click = {this.calPercentageHandler} />
        <Button value = "sqr" click = {this.calSquareHandler}/>
        <Button value = "C" click = {this.clearResultTextHandler} />
        <Button value = "/" click = {this.addValueToResultTextHandler} />
        <Button value = "7" click = {this.addValueToResultTextHandler} />
        <Button value = "8" click = {this.addValueToResultTextHandler} />
        <Button value = "9" click = {this.addValueToResultTextHandler} />
        <Button value = "*" click = {this.addValueToResultTextHandler} />
        <Button value = "4" click = {this.addValueToResultTextHandler} />
        <Button value = "5" click = {this.addValueToResultTextHandler} />
        <Button value = "6" click = {this.addValueToResultTextHandler} />
        <Button value = "-" click = {this.addValueToResultTextHandler} />
        <Button value = "1" click = {this.addValueToResultTextHandler} />
        <Button value = "2" click = {this.addValueToResultTextHandler} />
        <Button value = "3" click = {this.addValueToResultTextHandler} />
        <Button value = "+" click = {this.addValueToResultTextHandler} />
        <Button value = "+-" click = "" />
        <Button value = "0" click = {this.addValueToResultTextHandler} />
        <Button value = "." click = {this.addValueToResultTextHandler} />
        <Button value = "=" click = {this.calResultHandler}/>
      </div>
    )
  }
}

export default App;
