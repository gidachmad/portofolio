import React from 'react'
import silhouette from '../Img/silhouette.png'
import { Outlet } from 'react-router-dom'

export default function PlayerCard() {
  return (
    <>
      <div className='card rounded-border'>
        <h1 className='title-card'>Gid AAF</h1>

        <div className='image'>
          <img src={silhouette} alt='this is alt' className='w-full h-full' />
        </div>
      </div>
      <Outlet />
    </>
  )
}
