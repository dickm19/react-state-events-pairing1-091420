import React, { Component } from "react";
import { apiResponse } from '../api'
import DogCard from '../Components/DogCard'
class DogsList extends Component {

  state = {
    api: apiResponse
  }
  
  renderDogs = () => {
    return this.state.api.map(dogObj => <DogCard key={dogObj.id} dog={dogObj} clickHandler={this.props.clickHandler}/>)
    
  }
  render() {
    return <div className="list">{this.renderDogs()}</div>;
  }
}

export default DogsList;
