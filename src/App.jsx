import { React, useState} from 'react'
import './App.css'
import Dice from './components/dice'

function App(props) {

  /**
 * Challenge: Create a `Roll Dice` button that will re-roll
 * all 10 dice
 * 
 * Clicking the button should generate a new array of numbers
 * and set the `dice` state to that new array (thus re-rendering
 * the array to the page)
 */

  const [dice, setDice] = useState(allNewDice())

  const diceElements = dice.map(dice => <Dice value={dice.value} />)

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false
      })
    }
    return newDice
  }

  function rollDice() {
    setDice(allNewDice())
  }

  console.log(allNewDice())
  console.log(diceElements)
  return (
    <div>
      <div className='tenzies--wrapper'>
        <main className='tenzies--main'>
          <div className='tenzies--dice--container'>
            {diceElements}
            <div className='tenzies--button-container'>
              <button
                className="tenzies--button hover__press"
                onClick={rollDice}>
                ¡Tirar Dados!
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>    
  )
}

export default App
