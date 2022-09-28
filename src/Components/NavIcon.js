import React from 'react'
import {
  AcademicCapIcon,
  UserIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

export default function NavIcon() {
  const NavIcon = [
    { title: 'personal', path: '/personal', Icon: UserIcon },
    { title: 'education', path: '/education', Icon: AcademicCapIcon },
    { title: 'skills', path: '/skills', Icon: CodeBracketIcon },
    { title: 'works', path: '/works', Icon: BriefcaseIcon },
    { title: 'contact', path: '/contact', Icon: EnvelopeIcon },
  ]

  return (
    <>
      {NavIcon.map((icon) => {
        const { title, path, Icon } = icon

        return (
          <li key={title} className='flex-1 '>
            <Link to={path} className=''>
              <Icon className='w-16 h-16 mx-auto my-2 fill-white bg-gray-600 rounded-2xl hover:bg-gray-500 p-2 border-4 border-gray-800' />
            </Link>
          </li>
        )
      })}
    </>
  )
}
