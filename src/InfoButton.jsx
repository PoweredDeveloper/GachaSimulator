import React from 'react'

export default function InfoButton({toPulls, toInfo}) {
  return (
    <div className='flex justify-center items-center gap-2 w-full fixed bottom-0 bg-gray-400 dark:bg-gray-700 py-5 border-t-2 border-gray-600 dark:border-gray-800'>
      <button className='btn border-gray-600' onClick={toPulls}>Spin Gacha</button>
      <button className='btn border-gray-600' onClick={toInfo}>Information</button>
    </div>
  )
}
