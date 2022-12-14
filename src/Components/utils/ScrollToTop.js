import { useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    })
  }, [pathname])

  return null
}
