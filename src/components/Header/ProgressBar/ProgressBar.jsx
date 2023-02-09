// Code written by: 
// Powered Developer <https://github.com/PoweredDeveloper>
// (Istomin Mikhail) Check my profile for more info.
// MIT LICENSE
 
import React from 'react'

export default function ProgressBar({ gemsTimerIncome, timerSpeed, timer }) {
  // Просто отображение сколько времени до получения гемов
  return (
    <div className='h-5 dark:bg-gray-800 bg-gray-300 px-3 pb-3 rounded-b-lg'>
      <div className='h-full rounded-full dark:bg-gray-700 bg-gray-400'>
        <div className='bg-blue-200 dark:bg-red-100 w-full h-full transition-all rounded-full' style={{ width: timer.toString() + '%' }} />
      </div>
    </div>
  )
}
