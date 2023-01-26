import React, { useState } from 'react'
import './Header.css'
import plus from '../../assets/svgs/icons/plus.svg'
import { motion } from 'framer-motion'

export default function Header({ wishes, gachaGems, addGachaGems }) {
  const [timer, setTimer] = useState(0)

  setTimeout(() => {
    if (timer < 10) setTimer(timer + 1)
    else {
      addGachaGems(1)
      setTimer(0)
    }
  }, 2500)

  return (
    <header className='header_main'>
      <h4>Total wished: {wishes.total}</h4>
      <div>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => addGachaGems(20)}>
          <img src={plus} alt='+' />
        </motion.button>
        <h4>
          Gacha Gems: <span>{gachaGems}</span>
        </h4>
        <progress value={timer / 10} />
      </div>
    </header>
  )
}
