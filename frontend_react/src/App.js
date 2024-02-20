import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import NotFound404 from './pages/NotFound404'
import MyDesigns from './pages/MyDesigns'

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/design' element={<MyDesigns />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
    </div>
  )
}

export default App
