// Code written by: 
// Powered Developer <https://github.com/PoweredDeveloper>
// (Istomin Mikhail) Check my profile for more info.
// MIT LICENSE
 
import React from 'react'

export default function ProgressBar({ gemsTimerIncome, timerSpeed, timer }) {
  // Просто отображение сколько времени до получения гемов
  return (
    <div>
      <div className=''>
        <span>
          +{gemsTimerIncome} / {timerSpeed / 600}m
        </span>
        <div style={{ width: timer.toString() + '%' }} />
      </div>
    </div>
  )
}
