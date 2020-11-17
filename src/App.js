import React, { Component } from "react";
import "./App.css";
import DogsList from './Containers/DogsList'
import FavoritesContainer from './Containers/FavoritesContainer'
class App extends Component {

  state = {dog: {}}
  clickHandler = (dogObj) => {
     this.setState({dog: dogObj})
  }
  render() {
    return (
      
      <div className="app">
        <DogsList clickHandler={this.clickHandler}/>
        <FavoritesContainer dog={this.state.dog}/>
      </div>
    );
  }
}

export default App;
