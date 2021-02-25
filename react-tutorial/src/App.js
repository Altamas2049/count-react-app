import React, { Component } from 'react';
import './App.css';
import Tilt from 'react-tilt'
class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      count: 0,
    };
  } 

increment=()=>{
  if(this.state.count===0){
    this.setState({
      count: this.state.count+1
    });
  }
  else{
    if(this.state.count<10){    
      this.setState({
      count: this.state.count+1
    });
  };
  }
}
decrement=()=>{
  if(this.state.count===10){
    this.setState({
      count: this.state.count-1
    });
  }
  else{
    if(this.state.count>0){
      this.setState({
        count:this.state.count-1
      });
    }
   
  }
}
  render() {
    return (
      <div className="container">
      <div className="ContainerII">
        <div alt="CC" className="Count">
          <h3>COUNT</h3>
          <h1>{this.state.count}</h1>
        </div>
      </div>
      <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 25, width:25 }} >
        <div className="Tilt-inner"> 
        <button className="btn1" onClick={this.increment}>+</button> </div>
        </Tilt>

        <Tilt className="Tilt2" options={{ max : 55 }} style={{ height:25, width:25 }} >
        <div className="Tilt-inner"> 
        <button className="btn2" onClick={this.decrement}>-</button> </div>
        </Tilt>
    </div>
    );
  }
}
export default App;