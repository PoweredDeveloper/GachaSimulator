import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import gift from '../../assets/svgs/icons/gift.svg'
import './Header.css'
import ProgressBar from './ProgressBar/ProgressBar'
import gem from '../../assets/img/gem.png'

export default function Header({ wishes, gachaGems, addGachaGems, timerSpeed, gemsTimerIncome, buttonGemsAdd }) {
  const [timer, setTimer] = useState(0)

  // Timer
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

  return (
    <header className='header_main'>
      <h4>Total wished: {wishes.total}</h4>
      <div>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => addGachaGems(buttonGemsAdd)}>
          <img src={gift} alt='+' />
        </motion.button>
        <h4>
          {/* <img src={gem} alt="gem" /> */}
          Gems: 
          <span>{gachaGems}</span>
        </h4>
        <ProgressBar gemsTimerIncome={gemsTimerIncome} timerSpeed={timerSpeed} timer={timer} />
      </div>
    </header>
  )
}
