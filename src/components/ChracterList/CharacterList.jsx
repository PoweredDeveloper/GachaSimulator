import React from 'react'
import CharacterCard from './CharacterCard/CharacterCard'

export default function CharacterList({ characters, ...props }) {
  if (characters == null) throw new Error("Characters are null")
  return (
    <ul className=''>
      {characters.map((char, i) => (
        <CharacterCard character={char} key={i} />
      ))}
    </ul>
  )
}
