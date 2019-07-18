import React, { Component } from 'react';
import Table from './Table';
import './App.css';

class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor'
      },
      {
        name: 'Mac',
        job: 'Bouncer'
      }, {
        name: 'Dee',
        job: 'Aspring actress'
      },
      {
        name: 'Dennis',
        job: 'Bartender'
      }
    ]
  }

  removeCharacter = index => {
    const { characters } = this.state
    this.setState({
      characters:characters.filter((character, i)=>{
        console.log("removeCharacter에서의 i "+i);
        console.log("removeCharacter에서의 index "+index);
        return i !== index
      })
    })
  }

  render() {
    const { characters } = this.state
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
      </div>
    );
  }
}

export default App;
