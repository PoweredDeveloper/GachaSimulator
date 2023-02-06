import React, { useState } from 'react'
import { characters, chances, guarantees, softPitys } from '../../assets/data/data'
import './Pull.css'
import randomNumber from '../../assets/utils'

export default function Pull({
  wished,
  increaseWishes,
  sendCharacter,
  reset,
  gachaGems,
  spendGachaGems,
  discount,
  rollCost,
  multipleRollAmount,
  ...props
}) {
  const [softPity, setSoftPity] = useState([0, 0])
  
  const checkChances = (chances) => {
    let sum = 0
    Object.entries(chances).forEach((e) => (sum += e[1]))
    if (sum !== 100)
      throw new Error(
        'Chances are not 100%. You can change Rare chances to ' +
          Math.ceil((100 - sum + Object.values(chances)[Object.values(chances).length - 1]) / 0.01) * (0.01).toString()
      )
  }

  const oneRoll = () => {
    if (gachaGems < rollCost) return
    checkChances(chances)
    spendGachaGems(rollCost)

    const randNumber = randomNumber(0, 100, 100)
    dropCharacter(randNumber)
  }

  const multipleRoll = (rollCount) => {
    if (rollCount <= 0) throw new Error("Roll Count can't be lower than 1")
    const multipleRollCost = rollCost * rollCount - ((rollCost * rollCount) / 100) * discount
    if (gachaGems < multipleRollCost) return
    checkChances(chances)
    spendGachaGems(multipleRollCost)

    for (let i = 0; i < rollCount; i++) {
      const randNumber = randomNumber(0, 100, 100)
      dropCharacter(randNumber)
    }
  }

  const dropCharacter = (randNumber) => {
    increaseWishes('total')
    if (randNumber <= chances.unique || wished.guarantees.lastUnique >= guarantees.unique) addCharacter('unique')
    else if ((randNumber <= chances.legendary && randNumber > chances.unique) || wished.guarantees.lastLegendary >= guarantees.legendary)
      addCharacter('legendary')
    else if ((randNumber <= chances.epic && randNumber > chances.legendary) || wished.guarantees.lastEpic >= guarantees.epic)
      addCharacter('epic')
    else if ((randNumber <= chances.rare && randNumber > chances.epic) || wished.guarantees.lastRare >= guarantees.rare)
      addCharacter('rare')
  }

  const addCharacter = (characterRarity = 'rare') => {
    const characterGroup = characters[characterRarity]
    const randomizedCharacter = Math.ceil(Math.random() * Object.keys(characterGroup).length) - 1

    const lastWishedKey = ('last' + characterRarity[0].toUpperCase() + characterRarity.slice(1)).toString()
    increaseWishes(lastWishedKey, 0)

    const newCharacter = Object.values(characterGroup)[randomizedCharacter]
    sendCharacter(newCharacter)
  }

  return (
    <div className='roll-menu'>
      <button onClick={oneRoll}>Roll x1</button>
      <button className='discount-btn' onClick={() => multipleRoll(multipleRollAmount)} discount={discount}>
        Roll x{multipleRollAmount}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
