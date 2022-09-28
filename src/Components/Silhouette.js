import React from 'react'
import silhouette from '../Img/silhouette.png'

export default function Silhouette() {
  return (
    <div className='w-4/5 m-auto mt-10 p-4 bg-gray-400 border-4 border-gray-800 rounded-2xl'>
      <h1 className='w-fit px-8 py-2 mb-6 mx-auto bg-gray-600 border-4 border-gray-800 text-white text-lg'>
        Gid AAF
      </h1>
      <div className='image'>
        <img src={silhouette} alt="this is alt" className='w-full h-full' />
      </div>
    </div>
  )
}
