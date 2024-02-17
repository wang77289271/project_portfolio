import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
  MyWork,
} from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <MyWork />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
