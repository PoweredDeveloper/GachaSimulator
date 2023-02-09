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
      <span>{character.char.name}</span>
      <span>{'★'.repeat(character.char.rarity)}</span>
      <span>{character.amount}x</span>
    </motion.div>
  )
}
