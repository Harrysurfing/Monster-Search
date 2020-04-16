import React, {Component} from 'react';
import {Cardlist} from './component/cardlist/cardlist';
import {Searchbar} from './component/searchbar/searchbar';


import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField:''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=>this.setState({monsters:users}));
  }

  render() {
 
    const {monsters, searchField} = this.state;
    const monsterfilter = monsters.filter(
      monster=>monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className = "App">

        <h1>Monsters Rolodex</h1>

        <Searchbar
        placeholder='search monsters'
        handlechange = {
          e=>{this.setState({searchField : e.target.value})}
          }
        />
        <Cardlist monsters={monsterfilter}/>  
      </div>
    );
  }
}

export default App;
