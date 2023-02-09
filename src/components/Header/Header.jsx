// Code written by: 
// Powered Developer <https://github.com/PoweredDeveloper>
// (Istomin Mikhail) Check my profile for more info.
// MIT LICENSE
 
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import gift from '../../assets/svgs/icons/gift.svg'
import ProgressBar from './ProgressBar/ProgressBar'

export default function Header({ gachaGems, addGachaGems, timerSpeed, gemsTimerIncome}) {
  const [timer, setTimer] = useState(0)
  const [present, setPresent] = useState(600)
  const [click, setClick] = useState(false)

  // Таймер
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer >= 100) {
        setTimer(0)
        addGachaGems(gemsTimerIncome)
      } else {
        setTimer(timer + 1)
      }
    }, timerSpeed)

    return () => clearInterval(interval)
  }, [timer])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!click) {
        if (present <= 0) {
          setClick(true)
        } else {
          setPresent(present - 1)
        }
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [present])

  const collectPresent = () => {
    if (present <= 0) {
      addGachaGems(260)
      setPresent(600)
      setClick(false)
    }
  }

  function toTime(seconds) {
      var date = new Date(null);
      date.setSeconds(seconds);
      return date.toISOString().substring(14, 19);
  }

  return (
    <header className='w-full'>
      <div className='w-full h-14 bg-gray-300 dark:bg-gray-800 flex justify-between items-center flex-row p-3'>
        <h4 className='dark:bg-gray-700 bg-gray-400 h-full px-2 flex justify-center items-center rounded-lg dark:text-gray-100 text-gray-800 font-semibold border-2 border-transparent transition-all cursor-pointer dark:hover:border-gray-100 hover:border-gray-800'>
          <span>Gems: {gachaGems}</span>
        </h4>
        <div className='h-full flex items-center'>
          <span className='dark:text-gray-100 text-gray-800 font-semibold mr-2'>{present != 0 ? toTime(present) : '260 гемов за 10 минут!'}</span>
          <motion.button className={present <= 0 ? 'h-full aspect-square flex justify-center items-center bg-yellow-100 rounded-md' : 'h-full aspect-square flex justify-center items-center'} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={collectPresent}>
            <img className='h-2/3' src={gift} alt='+' />
          </motion.button>
        </div>
      </div>
      <ProgressBar gemsTimerIncome={gemsTimerIncome} timerSpeed={timerSpeed} timer={timer} />
    </header>
  )
}
