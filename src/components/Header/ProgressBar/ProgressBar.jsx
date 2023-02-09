// Code written by: 
// Powered Developer <https://github.com/PoweredDeveloper>
// (Istomin Mikhail) Check my profile for more info.
// MIT LICENSE
 
import React from 'react'

export default function ProgressBar({ gemsTimerIncome, timerSpeed, timer }) {
  // Просто отображение сколько времени до получения гемов
  return (
    <div className='h-5 dark:bg-gray-800 bg-gray-300 px-3 pb-3 rounded-b-lg flex items-center justify-between'>
      <span className='text-gray-800 dark:text-gray-200 font-bold text-xs mr-2 text-center'>+10/m</span>
      <div className='w-full h-full rounded-full dark:bg-gray-700 bg-gray-400'>
        <div className='bg-blue-100 dark:bg-red-100 w-full h-full transition-all rounded-full' style={{ width: timer.toString() + '%' }} />
      </div>
    </div>
  )
}
