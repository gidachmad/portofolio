import React from 'react'
import photo from '../../Img/photo.jpg'
import { personalData } from '../../mock/personal'

export default function Personal() {
  const data = personalData

  return (
    <>
      <section className='card rounded-border'>
        <h2 className='title-card text-lg'>Personal Stats</h2>

        <img
          src={photo}
          alt='This is Gid Achmad AF'
          className='w-4/5 mx-auto rounded-border my-6'
        />

        <p className='title-card text-sm text-center rounded-border'>
          {data.name}
        </p>

        <div className='personal-data text-sm'>
          <p className=''> Title </p>
          <p> {data.title} </p>
          <p> Age </p>
          <p> {data.age} </p>
          <p> Job </p>
          <p> {data.job} </p>
        </div>
      </section>
    </>
  )
}
