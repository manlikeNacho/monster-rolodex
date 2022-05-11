import { Component} from 'react';
import './card.styles.css'
import Cards from './just-cards.js'

class Cardlist extends Component{


  render(){

    const{monsters} = this.props

    return (
    <div className='card-list'>

     {monsters.map ((monster) => {
       return (
      <Cards monster ={monster} />
     );
   })}
    </div>
  );
  }
}

export default Cardlist;
