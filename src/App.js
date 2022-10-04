import { Outlet } from 'react-router-dom'
import NavLayout from './Components/NavLayout'

function App() {
  return (
    <>
      <NavLayout />
      <div className='container'>
        <Outlet />
      </div>
    </>
  )
}

export default App
