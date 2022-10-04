import { React, useState } from 'react'
import AccordionItem from './utils/AccordionItem'
import { skillTree } from '../mock/skill'

export default function Accordion() {
  const skills = skillTree

  const [clicked, setClicked] = useState('0')
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked('0')
    }

    setClicked(index)
  }

  return (
    <>
      <h1 className='title-card'>Skill Tree</h1>

      {skills.map((skill, index) => (
        <AccordionItem
          key={index}
          data={skill}
          onToggle={() => handleToggle(index)}
          active={clicked === index}
        />
      ))}

      <hr className='divider' />

      <article className='px-4 mt-4'>
        <p className='text-justify'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
          quaerat porro saepe vel aliquid praesentium quod tempore qui odio
          ipsa!
        </p>
      </article>
    </>
  )
}
