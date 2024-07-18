import React from 'react'

function Header() {
  return (
    
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Property</span>
            <span className='text-slate-700'>Pioneer</span>
          </h1>
      </div>
      </header>
  )
}

export default Header
