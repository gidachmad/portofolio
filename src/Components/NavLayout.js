import React from 'react'
import NavIcon from './NavIcon'

export default function NavLayout() {
  return (
    <>
      <nav className='nav order-last'>
        <ul className='flex bg-slate-400 border-t-4 border-gray-800 bottom-0 p-2 w-full'>
          <NavIcon />
        </ul>
      </nav>
    </>
  )
}
