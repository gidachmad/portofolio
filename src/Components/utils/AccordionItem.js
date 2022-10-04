import { React, useRef } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

export default function AccordionItem({ data, onToggle, active }) {
  const { category, skills } = data

  const contentEl = useRef()

  return (
    <div className={`mb-4 ${active ? 'active' : ''}`}>
      <button
        className='bg-slate-300 px-2 py-4 w-full flex justify-between'
        onClick={onToggle}>
        {category}
        <span className=''>
          {active ? (
            <ChevronDownIcon className='w-6 h-6' />
          ) : (
            <ChevronUpIcon className='w-6 h-6' />
          )}
        </span>
      </button>
      <section
        className={`text-justify  bg-white h-0 overflow-hidden transition-height duration-300 ease-in-out }`}
        ref={contentEl}
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: '0px' }
        }>
        <div className='grid grid-cols-3'>
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className='flex flex-col mx-auto items-center text-sm m-2'>
                <img
                  src={require(`../../Img/icon/${skill.icon}.svg`)}
                  alt=''
                  className='w-16 h-16'
                />
                <p className=''>{skill.name}</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
