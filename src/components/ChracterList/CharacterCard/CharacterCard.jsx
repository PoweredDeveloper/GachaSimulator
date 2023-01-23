import React from 'react'
import './CharacterCard.css'

export default function CharacterCard({ character, ...props }) {
  return (
    <div className='character_card'>
      <span>{character.char.name}</span>
      <span>{'★'.repeat(character.char.rarity)}</span>
      <span>{character.amount}x</span>
    </div>
  )
}
