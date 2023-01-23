import React from 'react'
import './Header.css'
import plus from '../../assets/svgs/icons/plus.svg'

export default function Header({ wishes, gachaGems, addGachaGems }) {
  return (
    <header className='header_main'>
      <h4>Total wished: {wishes.total}</h4>
      <div>
        <button onClick={() => addGachaGems(20)}>
          <img src={plus} alt='+' />
        </button>
        <h4>
          Gacha Gems: <span>{gachaGems}</span>
        </h4>
      </div>
    </header>
  )
}
