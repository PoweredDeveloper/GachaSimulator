// Code written by: 
// Powered Developer <https://github.com/PoweredDeveloper>
// (Istomin Mikhail) Check my profile for more info.
// MIT LICENSE
 
import React from 'react'
import { motion } from 'framer-motion'

export default function CharacterCard({ character, ...props }) {
  // Карточка Персонажей
  return (
    <motion.div initial={{ scaleX: 0.5, scale: 0 }} animate={{ scaleX: 1, scale: 1 }}>
      <div className='w-[200px] h-[140px] gap-2 bg-gray-400 dark:bg-gray-800 rounded-lg flex flex-col justify-center items-center dark:text-gray-200 border-2 border-transparent cursor-pointer transition-all hover:border-gray-800 hover:dark:border-gray-200'>
        <span className='font-bold'>{character.char.name}</span>
        <span>{'★'.repeat(character.char.rarity)}</span>
        {character.amount == 1 ? <span></span> : <span className='character_card_bubble'>{character.amount}x</span>}
      </div>
    </motion.div>
  )
}
