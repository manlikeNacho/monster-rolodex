import {Component} from 'react';

import logo from './logo.svg';
import './App.css';
import Cardlist from './components/card-list/card-list.component.js'
import SearchBox from './components/search-box/search-box.component.js'

class App extends Component {
  constructor(){
   super();

   this.state = {
     monsters: [],
     searchField : '',
   };

  }

  onSearchChange = (event) => {
      //console.log(event.target.value);
      const searchField = event.target.value.toLocaleLowerCase();

      this.setState(()=> {
        return{ searchField };
      })
    };


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(()=> {
        return{monsters: users}
      }),
    )
  }

  render(){

    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })
    //console.log('2')
    return (
      <div className="App">
      <h1 className="app-title">Monsters rolodex</h1>
      <SearchBox
      className ='search'
      placeholder ='search monsters'
      onChangeHandler = {onSearchChange}/>

      <Cardlist monsters = {filteredMonsters} />
      </div>
    );
  }
}


/*<header className="App-header">
 {filteredMonsters.map ((monster) =>{
   return <h1 key={monster.id}>{monster.name}</h1>
 })}
</header>*/



export default App;
