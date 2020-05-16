import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/CardList';
import { SearchBox } from './components/searchbox/SearchBox'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchfield:''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => {
        return Response.json()
      })
      .then(users => {
        this.setState({
          monsters: users
        })
      })
  }

  search=(e)=>{
    this.setState ({
      searchfield:e.target.value,
    })
  }

  render() {

    const {monsters,searchfield} = this.state;
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
      );

    return (
      <div className='App'>
         <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='searche monsters' handleChange={this.search}/>
        <CardList monsters={filterMonsters}/>
      </div>
    )
  }
}

export default App;