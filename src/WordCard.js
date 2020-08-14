import React ,{ useState } from 'react';
import CharacterCard from './CharacterCard';
import  _ from 'lodash';

const message = "HELLO"
const prepareStateFromWord = (given_word) => {
const word = given_word.toUpperCase()
const chars = _.shuffle(Array.from(word))
  return {
    word,
    chars,
    attempt: 1,
    guess: [],
    completed: false
  }
}
class App extends React.Component {


  state = prepareStateFromWord(message)
  
  activationHandler = (c) => {
    const guess = [...this.state.guess, c]

    this.setState({ guess })
    if (guess.length == this.state.chars.length) {
      if (guess.join('').toString() == this.state.word) {
        this.setState({guess: [],completed: true })
      }
      else {
        this.setState({guess: [],attempt: this.state.attempt + 1 })
      }   
    }
  }
  
  reset = () => {
    this.setState({ completed: false ,attempt: this.state.attempt + 1,})
  }

  render() {

    let attempt= this.state.completed === false ? 'FAIL' : '';
    let Com= this.state.completed === true ? <h2 class="Righteous2">Complete </h2>: '';
    let resetevery= this.state.completed === true ? <button onClick={this.reset}><h1>Play Again</h1></button>: '';    

    return (
     <div><h1 class="R2">Find the word</h1>
      <div className="Backgrounf">
       
        {Array.from(this.state.chars).map((item, index) => <CharacterCard value={item} key={index}  attempt={this.state.attempt} activationHandler={this.activationHandler} />)}
 
        <h2>Selected :</h2>
        <div class="Righteous2">{this.state.guess}</div>
        <div class="Righteous">Attemp {this.state.attempt}</div>
        <div >{Com}{resetevery}</div>
      </div>
      </div>
    );
  }
}


export default App;
