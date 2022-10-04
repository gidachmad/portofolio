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
          loading='lazy'
          src={photo}
          alt='This is Gid Achmad AF'
          className='w-4/5 mx-auto rounded-border my-6'
        />

        <p className='title-card text-sm text-center rounded-border'>
          {data.name}
        </p>

        <dl className='personal-data'>
          <dt> Title </dt>
          <dl>
            <ul className='flex flex-col gap-y-2'>
              {data.title.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
          </dl>
          <dt> Age </dt>
          <dl> {data.age} </dl>
          <dt> Job </dt>
          <dl> {data.job} </dl>
        </dl>

        <hr className='divider' />

        <article className='px-4 mt-4'>
          <p className='text-justify'> {data.introduction} </p>
        </article>
      </section>
    </>
  )
}
