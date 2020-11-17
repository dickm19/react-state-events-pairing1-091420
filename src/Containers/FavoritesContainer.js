import React from 'react';
import { apiResponse } from '../api'
import DogCard from '../Components/DogCard'

class FavoritesContainer extends React.Component{
    state = {
        api: apiResponse
    }
    renderDogs = () => {
    return this.state.api.map(dogObj => <DogCard key={dogObj.id} dog={dogObj}/>)  
    }
    render(){
        
        return (
        <div>
            <h3>Favorites</h3>
            <DogCard dog={this.props.dog} />
        </div>
        )
    }
}



export default FavoritesContainer