import React from 'react'
import { useEffect, useState } from 'react'
import Pull from './components/Pull/Pull'
import Header from './components/Header/Header'
import CharacterList from './components/ChracterList/CharacterList'

const LS_WISHES_KEY = 'gacha.wisher.wishes'
const LS_CHARACTERS_KEY = 'gacha.wisher.characters'
const LS_GEMS_KEY = 'gacha.wisher.gems'

function App() {
  const [wishes, setWishes] = useState({
    total: 0,
    guarantees: { lastUnique: 0, lastLegendary: 0, lastEpic: 0, lastRare: 0 },
  })
  const [characters, setCharacters] = useState([])
  const [gachaGems, setGachagems] = useState(0)

  useEffect(() => {
    setWishes(JSON.parse(localStorage.getItem(LS_WISHES_KEY))) // On Load
    setCharacters(JSON.parse(localStorage.getItem(LS_CHARACTERS_KEY))) // On Load
    setGachagems(Number(localStorage.getItem(LS_GEMS_KEY))) // On Load
  }, [])

  useEffect(() => {
    localStorage.setItem(LS_WISHES_KEY, JSON.stringify(wishes)) // Update
    localStorage.setItem(LS_CHARACTERS_KEY, JSON.stringify(characters)) // Update
  }, [wishes, characters])

  useEffect(() => {
    localStorage.setItem(LS_GEMS_KEY, gachaGems.toString())
  }, [gachaGems])

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

  const reset = () => {
    setWishes({
      total: 0,
      guarantees: { lastUnique: 0, lastLegendary: 0, lastEpic: 0, lastRare: 0 },
    })
    setCharacters([])
    setGachagems(10000)
  }

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

  return (
    <>
      <Header wishes={wishes} gachaGems={gachaGems} addGachaGems={addGachaGems} gemsTimerIncome={3} timerSpeed={50} buttonGemsAdd={1} />
      <Pull
        wished={wishes}
        increaseWishes={increaseWishes}
        sendCharacter={sendCharacters}
        reset={reset}
        gachaGems={gachaGems}
        spendGachaGems={spendGachaGems}
        discount={10}
        rollCost={130}
        multipleRollAmount={10}
      />
      <CharacterList characters={characters} />
    </>
  )
}

export default App
