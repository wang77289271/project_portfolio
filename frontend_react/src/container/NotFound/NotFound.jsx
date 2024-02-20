import { useEffect, useState } from 'react'
import './NotFound.scss'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const [count, setCount] = useState(5)
  const navigate = useNavigate()
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1)
    }, 1000)

    if (count === 0) {
      clearInterval(timer)
      navigate('/')
    }

    return () => clearInterval(timer)
  }, [count])
  return (
    <>
      <div className='app__flex app__notfound'>
        <h2>404</h2>
        <p>Page Not Found</p>
        <h5>
          Going back to home page in <span>{count}</span> second(s)
        </h5>
      </div>
    </>
  )
}

export default NotFound
