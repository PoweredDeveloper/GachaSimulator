// Code written by: 
// Powered Developer <https://github.com/PoweredDeveloper>
// (Istomin Mikhail) Check my profile for more info.
// MIT LICENSE

import React from 'react'
import { useEffect, useState } from 'react'
import Pull from './components/Pull/Pull'
import Header from './components/Header/Header'
import CharacterList from './components/ChracterList/CharacterList'

const LS_WISHES_KEY = 'gacha.wisher.wishes'
const LS_CHARACTERS_KEY = 'gacha.wisher.characters'
const LS_GEMS_KEY = 'gacha.wisher.gems'

// Сердце приложения отсюда работает весь проект
function App() {
  // Хуки useState
  const [wishes, setWishes] = useState({
    total: 0,
    guarantees: { lastUnique: 0, lastLegendary: 0, lastEpic: 0, lastRare: 0 },
  })
  const [characters, setCharacters] = useState([])
  const [gachaGems, setGachagems] = useState(0)

  // Вызывается при загрузке сайта (первом рендере)
  useEffect(() => {
    if (localStorage.getItem(LS_WISHES_KEY) != null) setWishes(JSON.parse(localStorage.getItem(LS_WISHES_KEY)))
    else setWishes({total: 0, guarantees: { lastUnique: 0, lastLegendary: 0, lastEpic: 0, lastRare: 0 }})
    if (localStorage.getItem(LS_CHARACTERS_KEY) != null) setCharacters(JSON.parse(localStorage.getItem(LS_CHARACTERS_KEY)))
    else setCharacters([])
    if (localStorage.getItem(LS_GEMS_KEY) != null) setGachagems(Number(localStorage.getItem(LS_GEMS_KEY)))
    else setGachagems(1e5)
  }, [])

  // При обновлении Dependencies
  useEffect(() => {
    localStorage.setItem(LS_WISHES_KEY, JSON.stringify(wishes))
  }, [wishes])

  useEffect(() => {
    localStorage.setItem(LS_CHARACTERS_KEY, JSON.stringify(characters))
    localStorage.setItem(LS_GEMS_KEY, gachaGems.toString())
  }, [characters, gachaGems])

  // увеличивает кол-во вращений по типам
  const increaseWishes = (wishType, increaseBy = 1) => {
    function setGuarantees(wishType = null) {
      let newGuarantees = wishes.guarantees
      if (wishType === null) {
        for (let key in newGuarantees) {
          newGuarantees[key] += increaseBy
        }
      }
      if (wishType !== null) newGuarantees[wishType] = 0
      setWishes((wish) => ({ ...wish, guarantees: newGuarantees }))
    }

    if (wishType.includes('last')) {
      setGuarantees(wishType)
    } else if (wishType === 'total') {
      setGuarantees()
      setWishes((wish) => ({ ...wish, [wishType]: (wishes[wishType] += increaseBy) }))
    } else if (wishType in wishes) setWishes((wish) => ({ ...wish, [wishType]: (wishes[wishType] += increaseBy) }))
  }

  // Добавляет персонажа в массив characters. (Удобно и эффективнее хранит данные)
  const sendCharacters = (character) => {
    let newCharacters = characters
    if (newCharacters.some((char) => char.char.id === character.id)) {
      newCharacters.forEach((group) => {
        if (group.char.id === character.id) {
          group.amount += 1
        }
      })
    } else newCharacters.push({ amount: 1, char: character })
    newCharacters.sort((a, b) => b.char.rarity - a.char.rarity)
    setCharacters(newCharacters)
  }

  const addGachaGems = (add) => {
    setGachagems(gachaGems + add)
  }

  const spendGachaGems = (spend) => {
    setGachagems(gachaGems - spend)
  }

  // JSX структура
  return (
    <div className='bg-gray-200 dark:bg-gray-600 min-h-screen pb-10'>
      <Header
        gachaGems={gachaGems}
        addGachaGems={addGachaGems}
        gemsTimerIncome={10}
        timerSpeed={600}
        buttonGemsAdd={1}
        presentTime={600}
        presentAmount={260}
      />
      <Pull
        wished={wishes}
        increaseWishes={increaseWishes}
        sendCharacter={sendCharacters}
        gachaGems={gachaGems}
        spendGachaGems={spendGachaGems}
        discount={10}
        rollCost={130}
        multipleRollAmount={10}
      />
      <CharacterList characters={characters} />
    </div>
  )
}

export default App