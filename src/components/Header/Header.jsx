import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import plus from '../../assets/svgs/icons/plus.svg'
import './Header.css'
import ProgressBar from './ProgressBar/ProgressBar'

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
    <>
      <header className='header_main'>
        <h4>Total wished: {wishes.total}</h4>
        <div>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => addGachaGems(buttonGemsAdd)}>
            <img src={plus} alt='+' />
          </motion.button>
          <h4>
            Gacha Gems: <span>{gachaGems}</span>
          </h4>
        </div>
      </header>
      <ProgressBar gemsTimerIncome={gemsTimerIncome} timerSpeed={timerSpeed} timer={timer} />
    </>
  )
}
