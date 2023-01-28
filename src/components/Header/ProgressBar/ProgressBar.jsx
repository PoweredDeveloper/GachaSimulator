import React from 'react'
import '../Header.css'

export default function ProgressBar({ gemsTimerIncome, timerSpeed, timer }) {
  return (
    <div>
      <div className='progress_bar'>
        <span>
          +{gemsTimerIncome} / {timerSpeed / 600}m
        </span>
        <div style={{ width: timer.toString() + '%' }} />
      </div>
    </div>
  )
}