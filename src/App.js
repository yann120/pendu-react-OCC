import React, { Component } from 'react';
import './App.css';
import LettersBox from './components/LettersBox'

class App extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
  letters: { "A": true, "B": true, "C": true, "D": true, "E": true, "F": true, "G": true, "H": true, "I": true, "J": true, "K": true, "L": true, "M": true, "N": true, "O": true, "P": true, "Q": true, "R": true, "S": true, "T": true, "U": true, "V": true, "W": true, "X": true, "Y": true, "Z": true }
  }
  handleClick = (letter) => {
    let letters = this.state.letters
    letters[letter] = false
    this.setState({letters})
  }
  render() {

  const afficherLettre = Object.keys(this.state.letters)
    .map(letter => (
      <LettersBox key={letter} letter={letter} unused={this.state.letters[letter]} onClick={this.handleClick} />   
      )
    )

    return   (
      <div className='container is-fluid'>
        <div className="letters columns is-multiline">
          {afficherLettre}
        </div>
      </div>
    )
  }
}

export default App;
