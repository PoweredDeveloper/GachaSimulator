// Code written by: 
// Powered Developer <https://github.com/PoweredDeveloper>
// (Istomin Mikhail) Check my profile for more info.
// MIT LICENSE
 
import React from 'react'
import CharacterCard from './CharacterCard/CharacterCard'

export default function CharacterList({ characters, ...props }) {
  // Рендер списка персонажей
  if (characters == null) throw new Error("Characters are null")
  return (
    <ul className='mt-10 flex flex-wrap justify-center gap-5'>
      {characters.map((char, i) => (
        <CharacterCard character={char} key={i} />
      ))}
    </ul>
  )
}
