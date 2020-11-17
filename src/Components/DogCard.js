import React, { Component }  from "react";

class DogCard extends Component {

 
  state = {
    clicked: false
  }
  dogClickHandler = () => {
    this.props.clickHandler(this.props.dog)
  }

  
  
  
  render() {
    return (
      <div className="card">
        <span className="content">
          <h2 >{this.props.dog.name}</h2>
          <img alt="dog" src={this.props.dog.img} />
        </span>
        <span className="bark">
          <button onClick={this.dogClickHandler}>Favorite</button>
          
        </span>
      </div>
    );
  }
  

}



export default DogCard;
