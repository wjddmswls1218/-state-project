import React from "react";
import Button from "./Button";
import Navigation from "./Layouts/Navigation";
import Jyr from "./Screens/Jyr";
import Bhj from "./Screens/Bhj";
import Kkm from "./Screens/Kkm";
import { Route } from "react-router-dom";
import Footer from "./Layouts/Footer";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      changeValue: 0,
    };
  }

  render() {
    return( 
    <div>
      <Route path="/" component={Navigation} />

      <Route exact path="/jyr" component={Jyr} />
      <Route exact path="/bhj" component={Bhj} />
      <Route exact path="/kkm" component={Kkm} />



      <h1>{this.state.changeValue}</h1>
      <Button name={`INCREMENT`} action={this._increment}/>
      <Button name={`DECREMENT`} action={this._decrement}/>
        
      <Route path="/" component={Footer} />
    </div>
    );
  }

  _increment = () => {
    this.setState((prevState) => {
      return {changeValue: prevState.changeValue + 1};
    });
  };

  _decrement = () => {
    this.setState((prevState) => {
      return {changeValue: prevState.changeValue - 1};
    });
  };
}


export default App;
