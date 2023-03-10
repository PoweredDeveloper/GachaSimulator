// Code written by: 
// Powered Developer <https://github.com/PoweredDeveloper>
// (Istomin Mikhail) Check my profile for more info.
// MIT LICENSE
 
import React, { useState } from 'react'
import { characters, chances, guarantees, softPitys } from '../../assets/data/data'
import randomNumber from '../../assets/utils'

export default function Pull({
  wished,
  increaseWishes,
  sendCharacter,
  gachaGems,
  spendGachaGems,
  discount,
  rollCost,
  multipleRollAmount,
  ...props
}) {
  // Хуки
  const [softPity, setSoftPity] = useState([0, 0])
  
  // Проверка на соблюдение шансов
  const checkChances = (chances) => {
    let sum = 0
    Object.entries(chances).forEach((e) => (sum += e[1]))
    if (sum !== 100)
      throw new Error(
        'Chances are not 100%. You can change Rare chances to ' +
          Math.ceil((100 - sum + Object.values(chances)[Object.values(chances).length - 1]) / 0.01) * (0.01).toString()
      )
  }

  // Одиночное вращение
  const oneRoll = () => {
    if (gachaGems < rollCost) return
    checkChances(chances)
    spendGachaGems(rollCost)

    const randNumber = randomNumber(0, 100, 100)
    dropCharacter(randNumber)
  }

  // Мульти-вращение
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

  // Определение редкости дропа
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

  // Добавление персонажа в массив
  const addCharacter = (characterRarity = 'rare') => {
    const characterGroup = characters[characterRarity]
    const randomizedCharacter = Math.ceil(Math.random() * Object.keys(characterGroup).length) - 1

    const lastWishedKey = ('last' + characterRarity[0].toUpperCase() + characterRarity.slice(1)).toString()
    increaseWishes(lastWishedKey, 0)

    const newCharacter = Object.values(characterGroup)[randomizedCharacter]
    sendCharacter(newCharacter)
  }

  // JSX структура
  return (
    <div className='flex justify-center items-center mt-10 gap-3'>
      <button className='btn' onClick={oneRoll}>Roll x1</button>
      <button className='btn btn_sale' sale={discount} onClick={() => multipleRoll(multipleRollAmount)} discount={discount}>
        Roll x{multipleRollAmount}
      </button>
    </div>
  )
}
