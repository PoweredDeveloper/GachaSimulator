import React from 'react'
import { motion } from 'framer-motion'
import { BiLink } from "react-icons/bi";

export default function Infotab() {
  return (
    <motion.div className='p-11 flex justify-center items-center flex-col' initial={{ scaleX: 0.5, scale: 0 }} animate={{ scaleX: 1, scale: 1 }}>
      <div className='flex justify-center items-center flex-col mb-4'>
        <h1 className='text text-xl font-bold text-center'>"Анализ и симуляция гача игр. Создание игры на Unity и сайта с системой Гача"</h1>
        <h3 className='text text-lg text-center'>Создал: <i>Истомин Михаил</i></h3>
        <h3 className='text text-base text-center'>9В Класс, МБОУ Гимназия №122, г. Казань</h3>
      </div>
      <h2 className='text text-center font-bold'>Ссылки:</h2>
      <div className='flex justify-center items-center gap-2'>
        <a href="https://github.com/PoweredDeveloper" target="_blank" rel="noopener noreferrer" className='link flex gap-1'>GitHub <BiLink /></a>
        <a href="https://github.com/PoweredDeveloper/GachaSimulator" target="_blank" rel="noopener noreferrer" className='link flex gap-1'>Сайт <BiLink /></a>
        <a href="https://github.com/PoweredDeveloper/Gacha-Game" target="_blank" rel="noopener noreferrer" className='link flex gap-1'>Игра <BiLink /></a>
      </div>
    </motion.div>
  )
}
