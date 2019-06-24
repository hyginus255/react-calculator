import React, {Component} from 'react';
import './App.css';
import Button from './Components/Button';
import ResultTest from './Components/ResultText';


class App extends Component {
  state = {
    result : 0
  }

  changeResultHandler = (event) => {
    this.setState({
      result : this.state.result === 0 ?  event.target.value : this.state.result + event.target.value,
    });
  }

  clearResultHandler = () => {
    this.setState({
      result : 0
    });
  }

  squareResultHandler = () => {
    this.setState({
      result : this.state.result ** 2
    });
  }

  calResultHandler = () => {
    this.setState({
      result : eval(this.state.result)
    });
  }

  render(){
    return(
      <div className="App">
        <ResultTest value = {this.state.result}/>
        <Button value = "%" click = {this.changeResultHandler} />
        <Button value = {['x', <sup>2</sup>]} click = {this.squareResultHandler}/>
        <Button value = "C" click = {this.clearResultHandler} />
        <Button value = "/" click = {this.changeResultHandler} />
        <Button value = "7" click = {this.changeResultHandler} />
        <Button value = "8" click = {this.changeResultHandler} />
        <Button value = "9" click = {this.changeResultHandler} />
        <Button value = "*" click = {this.changeResultHandler} />
        <Button value = "4" click = {this.changeResultHandler} />
        <Button value = "5" click = {this.changeResultHandler} />
        <Button value = "6" click = {this.changeResultHandler} />
        <Button value = "-" click = {this.changeResultHandler} />
        <Button value = "1" click = {this.changeResultHandler} />
        <Button value = "2" click = {this.changeResultHandler} />
        <Button value = "3" click = {this.changeResultHandler} />
        <Button value = "+" click = {this.changeResultHandler} />
        <Button value = "+-" click = {this.changeResultHandler} />
        <Button value = "0" click = {this.changeResultHandler} />
        <Button value = "." click = {this.changeResultHandler} />
        <Button value = "=" click = {this.calResultHandler}/>
      </div>
    )
  }
}

export default App;
