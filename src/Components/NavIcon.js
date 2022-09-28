import React from 'react'
import {
  AcademicCapIcon,
  UserIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  EnvelopeIcon
} from '@heroicons/react/24/solid'

export default function NavIcon() {
  const NavIcon = [
    {title: 'personal', path: '/#', Icon: UserIcon},
    {title: 'academic', path: '/#', Icon: AcademicCapIcon},
    {title: 'skills', path: '/#', Icon: CodeBracketIcon},
    {title: 'works', path: '/#', Icon: BriefcaseIcon},
    {title: 'contact', path: '/#', Icon: EnvelopeIcon}
  ]

  return (
    <>
      {
        NavIcon.map(icon => {
          const {title, path, Icon} = icon
          return (
            <li 
              key={title} 
              className='flex-1 bg-gray-600 hover:bg-gray-500 m-2 p-2 border-4 border-gray-800'>
              
              <a href={path}>
                <Icon className='w-12 h-12 m-auto fill-white' />
              </a>
              
            </li>
          )
        })
      }
    </>
  )
}